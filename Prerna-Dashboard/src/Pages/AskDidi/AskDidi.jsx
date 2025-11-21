// \Prerna\Prerna-Dashboard\src\Pages\AskDidi\AskDidi.jsx

import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import {
    Mic, Volume2, MessageCircle, Send, Globe, Sparkles, Heart, Shield
} from "lucide-react";

// --- Configuration Constants ---
// Use environment variable if available, otherwise fallback to standard port 8000
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
const DEMO_USER_ID = "u001"; 

// --- Enhanced Theme Colors (Women-Centric) ---
const COLORS = {
    PRIMARY_ACCENT: "#E91E63", 
    SECONDARY_ACCENT: "#FF6B9D",
    TERTIARY_ACCENT: "#C2185B",
    SOFT_ACCENT: "#FCE4EC",
    NEUTRAL_BASE: "#FFF8FA",
    DARK_TEXT: "#4A1942",
    SUCCESS: "#66BB6A",
    GRADIENT_START: "#FF6B9D",
    GRADIENT_END: "#E91E63",
};

// --- Translations ---
const translations = {
    en: {
        title: "Sakhi - Your AI Companion",
        subtitle: "Empowering women with knowledge & support",
        tapToSpeak: "TAP TO SPEAK",
        stop: "STOP",
        listening: "Listening...",
        analyzing: "Analyzing voice data...",
        speaking: "Playing AI Response...",
        ready: "Ready to assist you, sister",
        transcript: "Conversation Transcript",
        chatPlaceholder: "Type your message here...",
        send: "Send",
        greetingBot:
            "Namaste! I'm Sakhi, your AI companion. Tap the mic to start a voice conversation or use the chat button below. Ask me about government schemes, health advice, career guidance, or emergency support!",
        switchToChat: "Switch to Chat",
        switchToVoice: "Switch to Voice",
        emergency: "Emergency Help",
        emergencyNumber: "Women Helpline: 1091",
    },
    hi: {
        title: "सखी - आपकी एआई साथी",
        subtitle: "ज्ञान और सहायता से महिलाओं को सशक्त बनाना",
        tapToSpeak: "बोलने के लिए दबाएं",
        stop: "रोकें",
        listening: "सुन रही हूँ...",
        analyzing: "आवाज़ का विश्लेषण कर रही हूं...",
        speaking: "एआई जवाब सुना रही हूं...",
        ready: "आपकी सेवा में तैयार हूं बहन",
        transcript: "बातचीत का विवरण",
        chatPlaceholder: "यहाँ अपना संदेश लिखें...",
        send: "भेजें",
        greetingBot:
            "नमस्ते! मैं सखी हूं, आपकी एआई साथी। माइक दबाकर आवाज़ से बात करें या नीचे चैट बटन का उपयोग करें। मुझसे सरकारी योजनाओं, स्वास्थ्य सलाह, करियर मार्गदर्शन या आपातकालीन सहायता के बारे में पूछें!",
        switchToChat: "चैट पर जाएं",
        switchToVoice: "आवाज़ पर जाएं",
        emergency: "आपातकालीन सहायता",
        emergencyNumber: "महिला हेल्पलाइन: 1091",
    },
};

const AVATAR_URL =
    "https://images.unsplash.com/photo-1594895697380-f6551b80c55f?q=80&w=400&auto=format&fit=crop";

const AskDidi = () => {
    const [language, setLanguage] = useState("en");
    const [mode, setMode] = useState("voice");
    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [currentUser, setCurrentUser] = useState(null); // MERN user object

    const audioRef = useRef(null);
    const messagesEndRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const streamRef = useRef(null); // Reference for the audio stream for mic cleanup

    const t = translations[language];
    
    // Helper to get the current active User ID
    const getUserId = () => currentUser?._id || DEMO_USER_ID;

    // --- Core Logic ---

    // 1. Initial Greeting & Autoscroll
    useEffect(() => {
        setMessages([
            { type: "bot", text: t.greetingBot, hasVideo: false, timestamp: new Date() },
        ]);
    }, [language]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const addMessage = useCallback((message) => {
        setMessages((prev) => [...prev, message]);
    }, []);

    // Helper: save MERN user profile into FastAPI DB
    const saveProfileToFastAPI = async (user) => {
        if (!user || !user._id) return;
        try {
            await axios.post(`${API_BASE_URL}/save_profile`, {
                user_id: user._id,
                name: user.fullname || user.name || "User",
                location: user.address || "",
                preferred_language: user.language || "Hindi",
                interests: user.interest ? [user.interest] : []
            });
            console.log("FastAPI profile synced for user:", user._id);
        } catch (err) {
            console.error("Failed to save profile to FastAPI:", err?.response?.data ?? err.message);
        }
    };

    // 2. User Load and Sync from localStorage
    useEffect(() => {
        const tryLoadUserAndSync = async () => {
            let stored = null;
            const possibleKeys = ["authUser", "user", "currentUser", "auth"];
            
            for (const k of possibleKeys) {
                const raw = localStorage.getItem(k);
                if (raw) {
                    try {
                        const parsed = JSON.parse(raw);
                        const potentialUser = parsed.user ? parsed.user : parsed;
                        
                        if (potentialUser && (potentialUser._id || potentialUser.id)) {
                            stored = potentialUser;
                            break;
                        }
                    } catch (e) { /* Ignore non-JSON storage */ }
                }
            }

            if (stored && (stored._id || stored.id)) {
                // Normalise user object
                const userObj = {
                    _id: stored._id || stored.id || stored.user_id,
                    fullname: stored.fullname || stored.name || stored.fullName || "",
                    address: stored.address || stored.location || "",
                    language: stored.language || stored.preferred_language || "Hindi",
                    interest: stored.interest || null
                };

                setCurrentUser(userObj);
                await saveProfileToFastAPI(userObj);
            } else {
                setCurrentUser(null);
            }
        };

        tryLoadUserAndSync();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // 3. Play backend TTS audio
    const playAvatarVoice = (url) => {
        if (!url || !audioRef.current) return;

        audioRef.current.src = `${url}?t=${Date.now()}`;
        audioRef.current.load();
        audioRef.current.onplay = () => setIsSpeaking(true);
        audioRef.current.onended = () => setIsSpeaking(false);
        audioRef.current.onpause = () => setIsSpeaking(false);

        setIsSpeaking(true);

        audioRef.current.play().catch((err) => {
            console.warn("Autoplay blocked:", err);
            setIsSpeaking(false);
        });
    };

    // Helper to cleanup processing messages
    const cleanupProcessingMessages = () => {
        setMessages(prev => prev.filter(m => m.text !== t.analyzing));
    }


    // -------------------------
    // SEND VOICE TO BACKEND (POST /speech_ask)
    // -------------------------
    const sendAudioToBackend = async (audioBlob) => {
        setIsProcessing(true);
        cleanupProcessingMessages();

        const analysisMessage = {
            type: "bot",
            text: t.analyzing,
            timestamp: new Date(),
        };
        addMessage(analysisMessage);

        try {
            const formData = new FormData();
            formData.append("user_id", getUserId());
            formData.append("audio", audioBlob, "voice.webm");

            const response = await axios.post(`${API_BASE_URL}/speech_ask`, formData);

            const data = response.data;
            
            cleanupProcessingMessages(); 

            addMessage({ type: "user", text: data.transcript, timestamp: new Date() });
            addMessage({ type: "bot", text: data.answer, hasVideo: false, timestamp: new Date() });

            if (data.audio_url) playAvatarVoice(data.audio_url);
            
        } catch (err) {
            console.error("Error sending audio:", err);
            cleanupProcessingMessages();
            
            addMessage({
                type: "bot",
                text: "Voice processing mein error aaya. Please check FastAPI console for API Key/Server issues.",
                timestamp: new Date(),
            });
        } finally {
            setIsProcessing(false);
        }
    };

    // -------------------------
    // START RECORDING
    // -------------------------
    const startRecording = async () => {
        if (isProcessing || isSpeaking) return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream; // Save stream reference
            
            const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
            mediaRecorderRef.current = recorder;
            audioChunksRef.current = [];

            recorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
            
            recorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
                sendAudioToBackend(audioBlob);
            };

            recorder.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Microphone access error:", err);
            alert("Microphone access is required. Please check your browser settings.");
            setIsRecording(false);
        }
    };

    // -------------------------
    // STOP RECORDING
    // -------------------------
    const stopRecording = () => {
        if (!mediaRecorderRef.current || mediaRecorderRef.current.state !== "recording") return;

        mediaRecorderRef.current.stop();
        setIsRecording(false);
        
        // ⬅️ FIX: Stop the media tracks immediately to turn off mic light
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((t) => t.stop());
            streamRef.current = null;
        }
    };

    // -------------------------
    // CHAT MODE (POST /ask)
    // -------------------------
    const handleChatSubmit = async (e) => {
        e.preventDefault();
        const query = chatInput.trim();
        if (!query) return;

        addMessage({ type: "user", text: query, timestamp: new Date() });
        setChatInput(""); 
        setIsProcessing(true);

        try {
            // 🛑 FIX: Corrected endpoint path from /text_ask to /ask
            const response = await axios.post(`${API_BASE_URL}/ask`, { 
                user_id: getUserId(),
                message: query,
            });

            const data = response.data;

            addMessage({ type: "bot", text: data.answer, hasVideo: false, timestamp: new Date() });

            if (data.audio_url) playAvatarVoice(data.audio_url);
        } catch (err) {
            console.error("Error sending chat:", err);
            addMessage({
                type: "bot",
                text:
                    language === "en"
                        ? "Sorry, a communication error occurred. Please try again."
                        : "क्षमा करें, बातचीत में त्रुटि हुई। कृपया पुनः प्रयास करें।",
                timestamp: new Date(),
            });
        } finally {
            setIsProcessing(false);
        }
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "hi" : "en"));
        setMessages([]); // Re-run useEffect to load new greeting
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${COLORS.SOFT_ACCENT} 0%, ${COLORS.NEUTRAL_BASE} 50%, #FFF0F5 100%)`,
            }}
        >
            {/* Header */}
            <header className="w-full py-6 px-4 backdrop-blur-md bg-white/70 shadow-lg relative z-30">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                            style={{
                                background: `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
                            }}
                        >
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1
                                className="text-xl font-bold"
                                style={{ color: COLORS.DARK_TEXT }}
                            >
                                {t.title}
                            </h1>
                            <p
                                className="text-xs opacity-80"
                                style={{ color: COLORS.TERTIARY_ACCENT }}
                            >
                                {t.subtitle}
                            </p>
                            {currentUser ? (
                                <p className="text-xs mt-1" style={{ color: COLORS.TERTIARY_ACCENT }}>
                                    Logged in as: {currentUser.fullname || currentUser._id}
                                </p>
                            ) : (
                                <p className="text-xs mt-1" style={{ color: COLORS.TERTIARY_ACCENT }}>
                                    Not logged in (using Demo ID: {DEMO_USER_ID})
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                            style={{
                                backgroundColor: COLORS.PRIMARY_ACCENT,
                                color: "white",
                            }}
                        >
                            <Globe className="w-4 h-4" />
                            {language === "en" ? "हिंदी" : "English"}
                        </button>
                    </div>
                </div>
            </header>

            <audio ref={audioRef} className="hidden"></audio>

            {/* Main Content Area */}
            <div className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 relative z-10">
                {/* Left Side - Avatar & Controls */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Avatar */}
                    <div className="relative mb-8">
                        <div
                            className={`w-64 h-64 rounded-full shadow-2xl transition-all duration-500 ${
                                isSpeaking
                                    ? "ring-8 ring-offset-8 scale-105"
                                    : isRecording
                                    ? "ring-8 ring-offset-8 scale-105"
                                    : "ring-4 ring-offset-4"
                            }`}
                            style={{
                                ringColor: isSpeaking ? COLORS.SUCCESS : COLORS.PRIMARY_ACCENT,
                                boxShadow: `0 20px 60px ${COLORS.PRIMARY_ACCENT}40`,
                            }}
                        >
                            <img
                                src={AVATAR_URL}
                                alt="Sakhi Avatar"
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => {
                                    e.target.src = `https://placehold.co/400x400/${COLORS.PRIMARY_ACCENT.substring(
                                        1
                                    )}/FFFFFF?text=Sakhi`;
                                }}
                            />

                            {/* Pulse Animation on Avatar */}
                            {(isSpeaking || isRecording) && (
                                <div
                                    className="absolute inset-0 rounded-full animate-ping opacity-75"
                                    style={{
                                        backgroundColor: isSpeaking
                                            ? COLORS.SUCCESS
                                            : COLORS.PRIMARY_ACCENT,
                                    }}
                                ></div>
                            )}
                        </div>

                        {/* Sparkles Decoration */}
                        <Sparkles
                            className="absolute -top-4 -right-4 w-8 h-8 animate-pulse"
                            style={{ color: COLORS.SECONDARY_ACCENT }}
                        />
                    </div>

                    {/* Mode Toggle Buttons */}
                    <div className="flex gap-3 mb-6">
                        <button
                            onClick={() => setMode("voice")}
                            className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all flex items-center gap-2 ${
                                mode === "voice" ? "shadow-lg scale-105" : "opacity-60"
                            }`}
                            style={{
                                background:
                                    mode === "voice"
                                        ? `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`
                                        : "#E0E0E0",
                                color: mode === "voice" ? "white" : COLORS.DARK_TEXT,
                            }}
                        >
                            <Mic className="w-5 h-5" />
                            {t.switchToVoice}
                        </button>
                        <button
                            onClick={() => setMode("chat")}
                            className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all flex items-center gap-2 ${
                                mode === "chat" ? "shadow-lg scale-105" : "opacity-60"
                            }`}
                            style={{
                                background:
                                    mode === "chat"
                                        ? `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`
                                        : "#E0E0E0",
                                color: mode === "chat" ? "white" : COLORS.DARK_TEXT,
                            }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            {t.switchToChat}
                        </button>
                    </div>

                    {/* Voice Mode Controls */}
                    {mode === "voice" && (
                        <>
                            <button
                                onClick={isRecording ? stopRecording : startRecording}
                                disabled={isProcessing || isSpeaking}
                                className={`w-40 h-40 rounded-full flex flex-col items-center justify-center text-sm font-bold shadow-2xl transition-all duration-300 disabled:opacity-50 ${
                                    isRecording ? "animate-pulse scale-110" : "hover:scale-105"
                                }`}
                                style={{
                                    background: isRecording
                                        ? `linear-gradient(135deg, #EF5350, #D32F2F)`
                                        : `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
                                    color: "white",
                                }}
                            >
                                {isProcessing || isSpeaking ? (
                                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : isRecording ? (
                                    <>
                                        <Volume2 className="w-10 h-10 mb-2" />
                                        {t.stop}
                                    </>
                                ) : (
                                    <>
                                        <Mic className="w-10 h-10 mb-2" />
                                        {t.tapToSpeak}
                                    </>
                                )}
                            </button>

                            <p
                                className="mt-6 text-lg font-semibold text-center px-4"
                                style={{ color: COLORS.DARK_TEXT }}
                            >
                                {isRecording
                                    ? t.listening
                                    : isProcessing || isSpeaking
                                    ? isProcessing
                                        ? t.analyzing
                                        : t.speaking
                                    : t.ready}
                            </p>
                        </>
                    )}

                    {/* Chat Mode Input */}
                    {mode === "chat" && (
                        <form onSubmit={handleChatSubmit} className="w-full max-w-md">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    placeholder={t.chatPlaceholder}
                                    className="flex-1 px-4 py-3 rounded-full border-2 focus:outline-none focus:ring-2 text-sm"
                                    style={{
                                        borderColor: COLORS.PRIMARY_ACCENT,
                                        backgroundColor: "white",
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all disabled:opacity-50"
                                    style={{
                                        background: `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
                                    }}
                                >
                                    <Send className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Emergency Button */}
                    <div className="mt-8">
                        <a
                            href="tel:1091"
                            className="px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 animate-pulse-slow"
                            style={{
                                backgroundColor: "#EF5350",
                                color: "white",
                            }}
                        >
                            <Shield className="w-5 h-5" />
                            {t.emergency}
                        </a>
                        <p
                            className="text-xs text-center mt-2 font-semibold"
                            style={{ color: COLORS.TERTIARY_ACCENT }}
                        >
                            {t.emergencyNumber}
                        </p>
                    </div>
                </div>

                {/* Right Side - Conversation Panel */}
                <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto lg:mx-0">
                    <div
                        className="flex-1 backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border-2 p-6 flex flex-col overflow-hidden"
                        style={{ borderColor: COLORS.SOFT_ACCENT }}
                    >
                        <div
                            className="flex items-center gap-3 mb-4 pb-4 border-b-2"
                            style={{ borderColor: COLORS.SOFT_ACCENT }}
                        >
                            <MessageCircle
                                className="w-6 h-6"
                                style={{ color: COLORS.PRIMARY_ACCENT }}
                            />
                            <h3
                                className="font-bold text-lg"
                                style={{ color: COLORS.DARK_TEXT }}
                            >
                                {t.transcript}
                            </h3>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    ref={index === messages.length - 1 ? messagesEndRef : null}
                                    className={`flex ${
                                        message.type === "user" ? "justify-end" : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-md ${
                                            message.type === "user"
                                                ? "rounded-br-none"
                                                : "rounded-bl-none"
                                        }`}
                                        style={
                                            message.type === "user"
                                                ? {
                                                    background: `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
                                                    color: "white",
                                                }
                                                : {
                                                    backgroundColor: "white",
                                                    color: COLORS.DARK_TEXT,
                                                    border: `2px solid ${COLORS.SOFT_ACCENT}`,
                                                }
                                        }
                                    >
                                        <p className="text-xs font-semibold mb-1 opacity-80">
                                            {message.type === "user"
                                                ? currentUser?.fullname || (language === "en" ? "You" : "आप")
                                                : "Sakhi"}
                                        </p>
                                        <p className="text-sm leading-relaxed">{message.text}</p>
                                        {message.hasVideo && (
                                            <div className="mt-2 pt-2 border-t border-white/30">
                                                <p className="text-xs opacity-80">
                                                    📹 {message.videoTitle || "Video Available"}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles (remains the same) */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: ${COLORS.SOFT_ACCENT};
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: ${COLORS.PRIMARY_ACCENT};
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: ${COLORS.TERTIARY_ACCENT};
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default AskDidi;