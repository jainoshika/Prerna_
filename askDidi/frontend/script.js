document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("form").forEach(f => {
    f.addEventListener("submit", e => e.preventDefault());
  });

  document.querySelectorAll("button, input[type=submit], input[type=button]").forEach(btn => {
    btn.setAttribute("type", "button");
  });

  // DOM elements
  const avatar = document.getElementById("avatar");
  const inputEl = document.getElementById("input");
  const backendURL = "http://127.0.0.1:8000";

  let mediaRecorder;
  let audioChunks = [];
  let isRecording = false;
  let currentAudio = null;

  // ---------------- TEXT MESSAGE ----------------
  async function sendMessage() {
    try {
      const msg = inputEl.value.trim();
      if (!msg) return;

      const res = await fetch(`${backendURL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: "u001", message: msg })
      });

      const data = await res.json();
      console.log("AI:", data.answer);

      if (data.audio_url) {
        playAvatarVoice(data.audio_url);
      }
    } catch (e) {
      console.error("sendMessage error:", e);
    }
  }

  window.sendMessage = sendMessage;

  // ---------------- RECORDING ----------------
  async function startRecording() {
    audioChunks = [];
    isRecording = true;

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      await sendAudioToBackend(audioBlob);
    };

    mediaRecorder.start();
    console.log("Recording Started");
  }

  function stopRecording() {
    if (!isRecording) return;
    isRecording = false;
    console.log("Stop clicked");
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(t => t.stop());
  }

  window.startRecording = startRecording;
  window.stopRecording = stopRecording;

  // ---------------- AUDIO TO BACKEND ----------------
  async function sendAudioToBackend(audioBlob) {
    try {
      const formData = new FormData();
      formData.append("user_id", "u001");
      formData.append("audio", audioBlob, "voice.webm");

      const res = await fetch(`${backendURL}/speech_ask`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      console.log("Transcript:", data.transcript);
      console.log("Answer:", data.answer);
      console.log("Audio URL:", data.audio_url);

      if (data.audio_url) {
        playAvatarVoice(data.audio_url);
      }
    } catch (err) {
      console.error("sendAudioToBackend error:", err);
    }
  }

  window.sendAudioToBackend = sendAudioToBackend;

  // ---------------- FINAL WORKING AUDIO PLAYER ----------------
  function playAvatarVoice(url) {
    try {
      // Stop previous audio
      if (currentAudio) {
        try { currentAudio.pause(); } catch(_) {}
        currentAudio = null;
      }

      avatar.classList.remove("speaking");

      const finalUrl = `${url}?t=${Date.now()}`;
      console.log("Playing:", finalUrl);

      const audio = new Audio(finalUrl);
      currentAudio = audio;

      audio.crossOrigin = "anonymous";
      audio.playbackRate = 1.25;
      audio.preload = "auto";
      audio.volume = 1.0;

      // Modern reliable event
      audio.addEventListener("loadeddata", () => {
        avatar.classList.add("speaking");

        audio.play().catch(err => {
          console.warn("Autoplay blocked:", err);
          alert("Tap the screen once to enable audio.");
        });
      });

      audio.addEventListener("ended", () => {
        avatar.classList.remove("speaking");
      });

      audio.addEventListener("error", e => {
        console.error("Audio error:", e);
      });

    } catch (err) {
      console.error("playAvatarVoice error:", err);
      avatar.classList.remove("speaking");
    }
  }

  window.playAvatarVoice = playAvatarVoice;

});
