import React, { useState, useEffect } from 'react';
import { Award, Heart, ChevronRight, ArrowRight, Zap, Lightbulb, MessageSquare, Search, MessageCircle } from 'lucide-react';

// --- Theme Colors ---
const BRIGHT_CORAL = "#D9534F"; // Primary accent color
const DEEP_ORANGE = "#CD4628"; // Secondary accent color
const SUNNY_YELLOW = "#FFC843"; // Tertiary accent color
const SOFT_PINK = "#F9E8EC"; // Background accent color
const CREAMY_WHITE = "#FBFBFB";
const DARK_TEXT = "#333333";

// --- Configuration and Constants ---
// Removed API constants as data is now local
const ALL_OPPORTUNITIES_ROUTE = "/all-opportunities"; 

// A mapping for icons (Using inspirational/supportive icons)
const iconMap = {
  'motivation': Lightbulb,
  'support': Heart,
  'story': MessageSquare,
  'default': Zap,
};

// Helper function to get the appropriate icon component
const getIcon = (type) => iconMap[type.toLowerCase()] || iconMap.default;

// --- Local Motivation Data (Replaces API Fetch) ---
// Note: 'description' and a generic 'image_url' have been added to match the component's display expectations.
const GENERIC_DESCRIPTION = "Inspiring video content curated to uplift and empower women. Click to watch and get motivated.";
const GENERIC_IMAGE_URL = "https://images.unsplash.com/photo-1517486803732-c646067756f7?q=80&w=600&auto=format&fit=crop";

const LOCAL_MOTIVATION_DATA = [
    {_id: "wm001", id: "wm001", title: "WOMEN'S DAY पर अब तक का सबसे MOTIVATIONAL VIDEO", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=vg4s4-648pc", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm002", id: "wm002", title: "महिला सशक्तिकरण की प्रेरणादायक कहानी | Education Matters", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=OJvYaQF2O0I", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm003", id: "wm003", title: "Hindi Motivational Speech | Women Empowerment Program", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=nPlssYxupfc", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm004", id: "wm004", title: "नारी तुम हो शक्ति राष्ट्र की | Motivational Speech", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=r0nd0qASGNs", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm005", id: "wm005", title: "लड़कियों के लिए मोटिवेशनल से भरा वीडियो", type: "motivation", region: "Rajasthan", link: "https://www.youtube.com/watch?v=_TJbXtOIzhw", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm006", id: "wm006", title: "Tu Hai Shakti | Women Empowerment Videos", type: "motivation", region: "India", link: "https://www.youtube.com/playlist?list=PLZSTpdkjpoH7vqRWPDNVKfJ0a8jENbu…", description: "A playlist dedicated to women's power and empowerment themes.", image_url: GENERIC_IMAGE_URL},
    {_id: "wm007", id: "wm007", title: "नारी प्रेरणा! | Motivation For Women & Girls Of India", type: "motivation", region: "India", link: "https://www.youtube.com/playlist?list=PL1D6nWQpbEZdtH4G1TZNrBVj1zBfTOh…", description: "A collection of videos to inspire women and girls across India.", image_url: GENERIC_IMAGE_URL},
    {_id: "wm008", id: "wm008", title: "मैं स्त्री हूं, मैं नारी हूं | Motivational Video", type: "motivation", region: "Rajasthan", link: "https://www.youtube.com/watch?v=U4kJtHJFUVQ", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm009", id: "wm009", title: "सोच बदल दी इस लड़की ने | Inspirational Video", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=dw2DrSbSVwg", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm010", id: "wm010", title: "महिला दिवस पर भाषण नारी के अधिकार | Nari Sashaktikaran", type: "motivation", region: "Himachal Pradesh", link: "https://www.youtube.com/watch?v=8GJlIKUvUG8", description: "A powerful speech on women's rights for International Women's Day.", image_url: GENERIC_IMAGE_URL},
    {_id: "wm011", id: "wm011", title: "अपनी Value बढ़ाओ, तुम कमजोर नहीं", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=oWYYHiS5PVM", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm012", id: "wm012", title: "Khud Se Pyaar Karo | Women Empowerment", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=1WLUxvLlOsI", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm013", id: "wm013", title: "पावरफुल भाषण महिला दिवस पर | Speech on Women Empowerment", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=zClSNoD9hq0", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm014", id: "wm014", title: "महिला सशक्तिकरण पर भाषण शिक्षक द्वारा", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=jTDh2m5ke4U", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm015", id: "wm015", title: "महिला दिवस पर मोटिवेशनल भाषण", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=geknJ-5S-s4", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm016", id: "wm016", title: "महिलाओं के लिए | Motivational Video for Women", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=dfWZ4qGkd4s", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm017", id: "wm017", title: "Motivation for Women - महिलाएं स्मार्ट कैसे बनें", type: "motivation", region: "India", link: "https://www.youtube.com/playlist?list=PLNHDwUHKA9schpPlnBLI1O65ALATWRP…", description: "A playlist with tips and motivation on becoming a smart woman.", image_url: GENERIC_IMAGE_URL},
    {_id: "wm018", id: "wm018", title: "पहले अपना सोचो! फिर अपनों का | Best Motivational Video for Girls", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=-lzieojf3D4", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm019", id: "wm019", title: "Motivational Speech on Women's Day in Hindi", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=dw2DrSbSVwg", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
    {_id: "wm020", id: "wm020", title: "Girls Must Watch This | Best Motivational Video", type: "motivation", region: "India", link: "https://www.youtube.com/watch?v=87aZPzcf2w4", description: GENERIC_DESCRIPTION, image_url: GENERIC_IMAGE_URL},
];

// --- YouTube URL Processor (Remains Unchanged) ---
const getYouTubeEmbedUrl = (link) => {
    try {
        const url = new URL(link);
        if (url.hostname.includes('youtube.com')) {
            const videoId = url.searchParams.get('v');
            if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
        } else if (url.hostname.includes('youtu.be')) {
            const videoId = url.pathname.substring(1);
            if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
        }
    } catch (e) {}
    return null;
};


// --- Individual Motivation Card Component (Remains Unchanged) ---
const MotivationCardItem = ({ item, index }) => {
    const isVideoRight = index % 2 === 0;
    const embedUrl = getYouTubeEmbedUrl(item.link);
    const IconComponent = getIcon(item.type || 'motivation');

    // Content Block
    const content = (
        <div className="p-8 md:p-12 flex flex-col justify-center relative h-full">
            {/* Type Badge */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-[#CD4628] to-[#D9534F] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                <IconComponent size={16} strokeWidth={2.5} />
                <span className="tracking-wider">{item.type ? item.type.toUpperCase() : 'MOTIVATION'}</span>
            </div>

            <div className="mt-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: DARK_TEXT }}>
                    {item.title || "Untitled Resource"}
                </h3>
                
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-20 rounded-full" style={{ backgroundColor: BRIGHT_CORAL }}></div>
                    <div className="h-1 w-12 rounded-full" style={{ backgroundColor: SUNNY_YELLOW, opacity: 0.6 }}></div>
                    <div className="h-1 w-8 rounded-full" style={{ backgroundColor: DEEP_ORANGE, opacity: 0.4 }}></div>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg line-clamp-4">
                    {item.description || "Inspirational content designed to encourage, support, and uplift the women in our community."}
                </p>

                <a
                    href={item.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                    style={{ background: `linear-gradient(135deg, ${BRIGHT_CORAL} 0%, ${DEEP_ORANGE} 100%)` }}
                >
                    <Lightbulb size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>Explore Resource</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
                </a>
            </div>
        </div>
    );

    // Video Embed Block
    const videoEmbed = (
        <div className="relative h-80 md:h-full flex-shrink-0 overflow-hidden group/video">
            {embedUrl ? (
                <div className="relative w-full h-full">
                    <iframe
                        width="100%"
                        height="100%"
                        src={embedUrl}
                        title={item.title || "Motivational Video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full rounded-lg"
                    ></iframe>
                    
                    {/* Video Frame Decoration */}
                    <div className="absolute inset-0 pointer-events-none rounded-lg ring-2 ring-white/20"></div>
                </div>
            ) : (
                <div className="flex items-center justify-center w-full h-full rounded-lg" style={{ backgroundColor: SOFT_PINK }}>
                    <MessageCircle size={64} style={{ color: BRIGHT_CORAL, opacity: 0.4 }} strokeWidth={1.5} />
                </div>
            )}
            
            {/* Decorative Gradient Overlay on Hover */}
            <div 
                className="absolute inset-0 opacity-0 group-hover/video:opacity-10 transition-opacity duration-500 pointer-events-none rounded-lg"
                style={{ background: `linear-gradient(135deg, ${BRIGHT_CORAL} 0%, ${SUNNY_YELLOW} 100%)` }}
            ></div>
        </div>
    );

    return (
        <div 
            className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden group/card transition-all duration-500 hover:shadow-2xl"
            style={{ 
                backgroundColor: CREAMY_WHITE,
                boxShadow: `0 10px 40px rgba(217, 83, 79, 0.15)`
            }}
        >
            <div className={`md:flex ${isVideoRight ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[400px]`}>
                {/* Content Area */}
                <div className="w-full md:w-7/12 relative">
                    {content}
                </div>
                {/* Video Area */}
                <div className="w-full md:w-5/12 relative p-6">
                    {videoEmbed}
                </div>
            </div>
            
            {/* Hover Effect Border */}
            <div 
                className="h-1 w-0 group-hover/card:w-full transition-all duration-700 mx-auto"
                style={{ background: `linear-gradient(90deg, ${BRIGHT_CORAL} 0%, ${SUNNY_YELLOW} 50%, ${DEEP_ORANGE} 100%)` }}
            ></div>
        </div>
    );
};


export default function MotivationPage() {
    // Translation function (Remains Unchanged)
    const t = (key, fallback) => {
        if (key === "motivation.title") return "Inspirational Stories & Videos";
        if (key === "motivation.subtitle") return "Watch the complete list of motivational content curated for women empowerment.";
  
        return fallback;
    }; 
    
    // --- Data Initialization (Replaces Fetching Logic) ---
    // The component now directly uses the local dataset.
    const opportunitiesToDisplay = LOCAL_MOTIVATION_DATA;

    // The component is always in a loaded state since the data is local.

    return (
        <section className="py-20 px-6 relative overflow-hidden min-h-screen" style={{ backgroundColor: SOFT_PINK }}>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                    className="absolute top-20 -left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
                    style={{ backgroundColor: SUNNY_YELLOW, animationDuration: '4s' }}
                ></div>
                <div 
                    className="absolute bottom-20 -right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    style={{ backgroundColor: BRIGHT_CORAL, animationDuration: '6s' }}
                ></div>
                <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                    style={{ backgroundColor: DEEP_ORANGE }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6 shadow-md" style={{ backgroundColor: CREAMY_WHITE }}>
                        <Heart size={20} style={{ color: BRIGHT_CORAL }} fill={BRIGHT_CORAL} />
                        <span className="text-sm font-bold tracking-wider" style={{ color: BRIGHT_CORAL }}>EMPOWERMENT RESOURCES</span>
                    </div>
                    
                    <h2 
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
                        style={{ 
                            background: `linear-gradient(135deg, ${BRIGHT_CORAL} 0%, ${DEEP_ORANGE} 50%, ${SUNNY_YELLOW} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        {t("motivation.title")}
                    </h2>
                    
                    <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        {t("motivation.subtitle")}
                    </p>
                </div>

                {/* Card Grid */}
                {opportunitiesToDisplay.length === 0 ? (
                    <div className="text-center p-16 rounded-3xl shadow-xl max-w-2xl mx-auto" style={{ backgroundColor: CREAMY_WHITE }}>
                        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: SOFT_PINK }}>
                            <Search size={40} style={{ color: BRIGHT_CORAL }} strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold mb-3" style={{ color: DARK_TEXT }}>No Resources Found</h3>
                        <p className="text-gray-600 text-lg">No inspirational resources available at this time. Please check back later.</p>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-12 items-center">
                        {opportunitiesToDisplay.map((item, index) => (
                            <MotivationCardItem key={item._id} item={item} index={index} />
                        ))}
                    </div>
                )}
                
            </div>
        </section>
    );
}


// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios for API fetching
// import { Award, Heart, ChevronRight, ArrowRight, Zap, Lightbulb, MessageSquare, Search, MessageCircle } from 'lucide-react';

// // --- Theme Colors ---
// const BRIGHT_CORAL = "#D9534F"; // Primary accent color
// const DEEP_ORANGE = "#CD4628"; // Secondary accent color
// const SUNNY_YELLOW = "#FFC843"; // Tertiary accent color
// const SOFT_PINK = "#F9E8EC"; // Background accent color
// const CREAMY_WHITE = "#FBFBFB";
// const DARK_TEXT = "#333333";

// // --- Configuration and Constants ---
// const API_BASE_URL = "http://127.0.0.1:8000"; 
// const MOTIVATION_ENDPOINT = `${API_BASE_URL}/motivation`; // Restored API endpoint
// const ALL_OPPORTUNITIES_ROUTE = "/all-opportunities"; 

// // A mapping for icons
// const iconMap = {
//   'motivation': Lightbulb,
//   'support': Heart,
//   'story': MessageSquare,
//   'default': Zap,
// };

// // Helper function to get the appropriate icon component
// const getIcon = (type) => iconMap[type.toLowerCase()] || iconMap.default;

// // --- Default Fallback Motivation Items (Kept for robust error handling) ---
// const DEFAULT_MOTIVATION = [
//     {
//         _id: "default-1",
//         title: "The Power of Self-Belief",
//         description: "Inspirational stories of women who overcame challenges. Use the link to watch a motivational video.",
//         image_url: "https://images.unsplash.com/photo-1517486803732-c646067756f7?q=80&w=600&auto=format&fit=crop",
//         type: "story",
//         link: "https://www.youtube.com/watch?v=nPlssYxupfc",
//         age_min: 16, age_max: 99
//     },
//     {
//         _id: "default-2",
//         title: "Daily Wellness Checklist",
//         description: "Simple steps and exercises to boost your mental health and maintain balance. Click to explore wellness guidance.",
//         image_url: "https://images.unsplash.com/photo-1549477038-f865f802161f?q=80&w=600&auto=format&fit=crop",
//         type: "support",
//         link: "https://www.youtube.com/watch?v=OJvYaQF2O0I",
//         age_min: 18, age_max: 60
//     },
// ];

// // --- YouTube URL Processor (Remains Unchanged) ---
// const getYouTubeEmbedUrl = (link) => {
//     try {
//         const url = new URL(link);
//         if (url.hostname.includes('youtube.com')) {
//             const videoId = url.searchParams.get('v');
//             if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
//         } else if (url.hostname.includes('youtu.be')) {
//             const videoId = url.pathname.substring(1);
//             if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
//         }
//     } catch (e) {}
//     return null;
// };


// // --- Individual Motivation Card Component (Remains Unchanged) ---
// const MotivationCardItem = ({ item, index }) => {
//     const isVideoRight = index % 2 === 0;
//     const embedUrl = getYouTubeEmbedUrl(item.link);
//     const IconComponent = getIcon(item.type || 'motivation');

//     // Content Block
//     const content = (
//         <div className="p-8 md:p-12 flex flex-col justify-center relative h-full">
//             {/* Type Badge */}
//             <div className="absolute top-6 left-6 bg-gradient-to-r from-[#CD4628] to-[#D9534F] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
//                 <IconComponent size={16} strokeWidth={2.5} />
//                 <span className="tracking-wider">{item.type ? item.type.toUpperCase() : 'MOTIVATION'}</span>
//             </div>

//             <div className="mt-8">
//                 <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: DARK_TEXT }}>
//                     {item.title || "Untitled Resource"}
//                 </h3>
//                 
//                 <div className="flex items-center gap-3 mb-6">
//                     <div className="h-1 w-20 rounded-full" style={{ backgroundColor: BRIGHT_CORAL }}></div>
//                     <div className="h-1 w-12 rounded-full" style={{ backgroundColor: SUNNY_YELLOW, opacity: 0.6 }}></div>
//                     <div className="h-1 w-8 rounded-full" style={{ backgroundColor: DEEP_ORANGE, opacity: 0.4 }}></div>
//                 </div>
//                 
//                 <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg line-clamp-4">
//                     {item.description || "Inspirational content designed to encourage, support, and uplift the women in our community."}
//                 </p>

//                 <a
//                     href={item.link || '#'} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
//                     style={{ background: `linear-gradient(135deg, ${BRIGHT_CORAL} 0%, ${DEEP_ORANGE} 100%)` }}
//                 >
//                     <Lightbulb size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
//                     <span>Explore Resource</span>
//                     <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
//                 </a>
//             </div>
//         </div>
//     );

//     // Video Embed Block
//     const videoEmbed = (
//         <div className="relative h-80 md:h-full flex-shrink-0 overflow-hidden group/video">
//             {embedUrl ? (
//                 <div className="relative w-full h-full">
//                     <iframe
//                         width="100%"
//                         height="100%"
//                         src={embedUrl}
//                         title={item.title || "Motivational Video"}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="absolute inset-0 w-full h-full rounded-lg"
//                     ></iframe>
//                     
//                     {/* Video Frame Decoration */}
//                     <div className="absolute inset-0 pointer-events-none rounded-lg ring-2 ring-white/20"></div>
//                 </div>
//             ) : (
//                 <div className="flex items-center justify-center w-full h-full rounded-lg" style={{ backgroundColor: SOFT_PINK }}>
//                     <MessageCircle size={64} style={{ color: BRIGHT_CORAL, opacity: 0.4 }} strokeWidth={1.5} />
//                 </div>
//             )}
//             
//             {/* Decorative Gradient Overlay on Hover */}
//             <div 
//                 className="absolute inset-0 opacity-0 group-hover/video:opacity-10 transition-opacity duration-500 pointer-events-none rounded-lg"
//                 style={{ background: `linear-gradient(135deg, ${BRIGHT_CORAL} 0%, ${SUNNY_YELLOW} 100%)` }}
//             ></div>
//         </div>
//     );

//     return (
//         <div 
//             className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden group/card transition-all duration-500 hover:shadow-2xl"
//             style={{ 
//                 backgroundColor: CREAMY_WHITE,
//                 boxShadow: `0 10px 40px rgba(217, 83, 79, 0.15)`
//             }}
//         >
//             <div className={`md:flex ${isVideoRight ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[400px]`}>
//                 {/* Content Area */}
//                 <div className="w-full md:w-7/12 relative">
//                     {content}
//                 </div>
//                 {/* Video Area */}
//                 <div className="w-full md:w-5/12 relative p-6">
//                     {videoEmbed}
//                 </div>
//             </div>
//             
//             {/* Hover Effect Border */}
//             <div 
//                 className="h-1 w-0 group-hover/card:w-full transition-all duration-700 mx-auto"
//                 style={{ background: `linear-gradient(90deg, ${BRIGHT_CORAL} 0%, ${SUNNY_YELLOW} 50%, ${DEEP_ORANGE} 100%)` }}
//             ></div>
//         </div>
//     );
// };


// export default function MotivationPage() {
//     const t = (key, fallback) => {
//         if (key === "motivation.title") return "Inspirational Stories & Videos";
//         if (key === "motivation.subtitle") return "Watch the complete list of motivational content curated for women empowerment.";
//         if (key === "motivation.more_opportunities") return "Browse All Resources";
//         return fallback;
//     }; 
//     
//     // --- Restored State for API Fetching ---
//     const [opportunities, setOpportunities] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // --- Restored Data Fetching Logic ---
//     useEffect(() => {
//         const fetchMotivation = async () => {
//             setLoading(true);
//             setError(null);

//             // Using hardcoded user profile as in the previous examples
//             const storedUser = { age: 25, region: "India" }; 
//             const userAge = storedUser.age || 18;
//             const userRegion = storedUser.region || "India";
//             
//             // Construct API URL with required parameters
//             const url = `${MOTIVATION_ENDPOINT}?age=${userAge}&region=${userRegion}`;

//             try {
//                 // Use axios for fetching
//                 const response = await axios.get(url);
//                 
//                 // The FastAPI endpoint returns data under the 'motivation' key
//                 let programsArray = response.data.motivation; 
//                 
//                 if (!Array.isArray(programsArray)) {
//                     throw new Error("API response did not contain a valid 'motivation' array.");
//                 }

//                 // Map data to ensure required fields exist (like description)
//                 const standardizedPrograms = programsArray.map(item => ({
//                     ...item,
//                     // Provide a default description if the DB item lacks one
//                     description: item.description || item.title || "No description available for this inspirational resource.",
//                     type: item.type || 'motivation',
//                     link: item.link || '#'
//                 }));

//                 setOpportunities(standardizedPrograms);
//             } catch (err) {
//                 console.error("API Fetch Error:", err);
//                 // Set a descriptive error message
//                 setError("Unable to load motivational content. Please ensure the FastAPI server is running.");
//                 setOpportunities(DEFAULT_MOTIVATION); // Fallback to local default data
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMotivation();
//     }, []); 

//     // --- Render Logic (Remains Unchanged) ---
//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: CREAMY_WHITE }}>
//                 <div className="text-center">
//                     <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full shadow-lg" style={{ backgroundColor: SOFT_PINK }}>
//                         <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: BRIGHT_CORAL, animationDelay: '0ms' }}></div>
//                         <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: SUNNY_YELLOW, animationDelay: '150ms' }}></div>
//                         <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: DEEP_ORANGE, animationDelay: '300ms' }}></div>
//                         <span className="font-bold text-lg ml-2" style={{ color: BRIGHT_CORAL }}>Loading inspirational content...</span>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (error && opportunities.length === 0) {
//         return (
//             <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: CREAMY_WHITE }}>
//                 <div className="text-center p-12 rounded-3xl shadow-xl max-w-md" style={{ backgroundColor: SOFT_PINK }}>
//                     <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: BRIGHT_CORAL }}>
//                         <MessageCircle size={32} color="white" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-2" style={{ color: DARK_TEXT }}>Connection Error</h3>
//                     <p className="text-gray-700">{error}</p>
//                 </div>
//             </div>
//         );
//     }
//     
//     const opportunitiesToDisplay = opportunities.length > 0 ? opportunities : DEFAULT_MOTIVATION;

//     return (
//         <section className="py-20 px-6 relative overflow-hidden min-h-screen" style={{ backgroundColor: SOFT_PINK }}>
//             
//             {/* Animated Background Elements */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div 
//                     className="absolute top-20 -left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
//                     style={{ backgroundColor: SUNNY_YELLOW, animationDuration: '4s' }}
//                 ></div>
//                 <div 
//                     className="absolute bottom-20 -right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
//                     style={{ backgroundColor: BRIGHT_CORAL, animationDuration: '6s' }}
//                 ></div>
//                 <div 
//                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
//                     style={{ backgroundColor: DEEP_ORANGE }}
//                 ></div>
//             </div>

//             <div className="max-w-7xl mx-auto relative z-10">
//                 
//                 {/* Section Header */}
//                 <div className="text-center mb-20">
//                     <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6 shadow-md" style={{ backgroundColor: CREAMY_WHITE }}>
//                         <Heart size={20} style={{ color: BRIGHT_CORAL }} fill={BRIGHT_CORAL} />
//                         <span className="text-sm font-bold tracking-wider" style={{ color: BRIGHT_CORAL }}>EMPOWERMENT RESOURCES</span>
//                     </div>
//                     
//                     <h2 
//                         className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
//                         style={{ 
//                             background: `linear-gradient(135deg, ${BRIGHT_CORAL} 0%, ${DEEP_ORANGE} 50%, ${SUNNY_YELLOW} 100%)`,
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                             backgroundClip: 'text'
//                         }}
//                     >
//                         {t("motivation.title")}
//                     </h2>
//                     
//                     <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//                         {t("motivation.subtitle")}
//                     </p>
//                 </div>

//                 {/* Card Grid */}
//                 {opportunitiesToDisplay.length === 0 ? (
//                     <div className="text-center p-16 rounded-3xl shadow-xl max-w-2xl mx-auto" style={{ backgroundColor: CREAMY_WHITE }}>
//                         <Search size={40} className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-pink-100 p-4" style={{ color: BRIGHT_CORAL }} strokeWidth={2} />
//                         <h3 className="text-3xl font-bold mb-3" style={{ color: DARK_TEXT }}>No Resources Found</h3>
//                         <p className="text-gray-600 text-lg">No inspirational resources available at this time. Please check back later.</p>
//                     </div>
//                 ) : (
//                     <div className="flex flex-col space-y-12 items-center">
//                         {opportunitiesToDisplay.map((item, index) => (
//                             <MotivationCardItem key={item._id} item={item} index={index} />
//                         ))}
//                     </div>
//                 )}
//                 
//                 {/* More Opportunities Button */}
//                 <div className="text-center mt-16">
//                     <a 
//                         href={ALL_OPPORTUNITIES_ROUTE}
//                         className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
//                         style={{ background: `linear-gradient(135deg, ${BRIGHT_CORAL} 0%, ${SUNNY_YELLOW} 100%)` }}
//                     >
//                         <span>{t("motivation.more_opportunities")}</span>
//                         <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }