import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Users, Award, Shield, Heart, ChevronRight, ArrowRight } from 'lucide-react';
import axios from 'axios';

// --- Configuration and Constants ---

// Using hardcoded URL as requested for compilation environment.
const API_BASE_URL = "http://127.0.0.1:8000"; 
// Changed endpoint to target the /scholarships route
const SCHOLARSHIPS_ENDPOINT = `${API_BASE_URL}/scholarships`; 
const ALL_OPPORTUNITIES_ROUTE = "/all-opportunities"; 

// A mapping for icons based on the data 'type' or a category in your DB
const iconMap = {
  'scholarship': GraduationCap,
  'scheme': Shield,
  'sport': BookOpen,
  'motivation': Award,
  'health': Heart,
  // Default icon for scholarships
  'default': GraduationCap,
};

// Helper function to get the appropriate icon component
const getIcon = (type) => iconMap[type.toLowerCase()] || iconMap.default;

export default function ScholarshipCards() {
  const t = (key, fallback) => {
    // Mock translation function: returns hardcoded English fallbacks
    if (key === "scholarships.title") return "Education & Scholarship Programs";
    if (key === "scholarships.subtitle") return "Tailored funding and educational schemes filtered by age and region.";
    if (key === "scholarships.learn_more") return "View Details";
    if (key === "scholarships.more_opportunities") return "Browse All Opportunities";
    return fallback;
  }; 
  
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Fetch Data from FastAPI Endpoint (Scholarships Route) ---
  useEffect(() => {
    // 👉 Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("prerna_user")) || {};

    const userAge = storedUser.age || 18;
    const userRegion = storedUser.region || "India";
    
    // Construct URL using age and region only, as per /scholarships endpoint signature
    const url = `${SCHOLARSHIPS_ENDPOINT}?age=${userAge}&region=${userRegion}`;

    axios.get(url)
      .then(response => {
        // The scholarships endpoint returns data under the 'scholarships' key
        if (response.data && Array.isArray(response.data.scholarships)) {
          setOpportunities(response.data.scholarships);
        } else {
          setError('Failed to fetch data: ' + (response.data.message || 'Unknown error'));
        }
      })
      .catch(err => {
        console.error("API Fetch Error:", err);
        setError("Network or API call failed. Ensure FastAPI is running.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); 

  // --- Render Logic ---
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBFBFB] py-20 px-6 text-center text-[#D9534F] font-bold text-xl">
        Loading scholarship programs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FBFBFB] py-20 px-6 text-center text-red-600 font-bold text-xl">
        Error: {error}
      </div>
    );
  }
  
  // Display up to 9 opportunities to fill a nice grid
  const opportunitiesToDisplay = opportunities.slice(0, 9); 

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-[#FBFBFB] font-sans">
      
      {/* Soft Background Gradients - Matching AgeCareSection Theme */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .button-link:hover .arrow-icon { opacity: 1; margin-left: 0; }
        .button-link .arrow-icon { opacity: 0; margin-left: -4px; transition: all 0.3s; }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFB] via-[#F9E8EC] to-[#FBFBFB] -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC843]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9534F]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4 tracking-tight">
            {t("scholarships.title")}
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {t("scholarships.subtitle")}
          </p>
        </div>

        {/* Card Grid */}
        {opportunitiesToDisplay.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No scholarships found for your current age and region.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {opportunitiesToDisplay.map((item, index) => {
              const ButtonIcon = getIcon(item.type || 'scholarship');
              
              // Get the scheme type for the badge, defaulting to 'Scheme'
              const itemType = item.type ? item.type.toUpperCase() : 'SCHOLARSHIP';

              return (
                <div
                  key={item._id}
                  className="group bg-white p-6 shadow-xl hover:shadow-2xl hover:shadow-[#D9534F]/30 transition-all duration-500 border border-[#F9E8EC] flex flex-col items-center text-center relative overflow-hidden rounded-xl"
                >
                  {/* Hover Gradient Background Effect */}
                  <div className="absolute inset-0 bg-[#F9E8EC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />

                  {/* Image/Icon Container - Matching AgeCareSection style */}
                  <div className="relative w-32 h-32 mb-6">
                    
                    {/* Rotating Border uses Coral/Yellow Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D9534F] to-[#FFC843] rounded-full animate-spin-slow opacity-70 blur-sm group-hover:blur-md transition-all"></div>
                    
                    {/* Image/Icon Circle */}
                    <div className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500 flex items-center justify-center bg-gray-200 overflow-hidden">
                        <img
                          src={item.image_url || `https://placehold.co/128x128/A0A0A0/ffffff?text=${itemType}`}
                          alt={item.title || "Opportunity"}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://placehold.co/128x128/A0A0A0/ffffff?text=${itemType}`;
                          }}
                        />
                        {/* Optional: Overlay Icon if no image is present */}
                        {!item.image_url && <GraduationCap size={60} className="text-[#D9534F] absolute opacity-70"/>}
                    </div>
                    
                    {/* Badge - Coral/White Accent (Age/Type) */}
                    <div className="absolute bottom-0 right-0 bg-[#D9534F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-white">
                        {item.age}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#333333] mb-2 group-hover:text-[#D9534F] transition-colors">
                      {item.title || item.name || "Untitled Scholarship"}
                    </h3>
                    
                    {/* Divider - Coral Accent */}
                    <div className="h-1 w-12 bg-[#D9534F]/50 mx-auto rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                      {item.description || "Scheme details are loading..."}
                    </p>

                    {/* View Details Button/Link */}
                    <a href={item.link || '#'} target="_blank" rel="noopener noreferrer" 
                        className="text-[#CD4628] font-bold inline-flex items-center group/btn button-link cursor-pointer">
                      <span className="group-hover/btn:mr-2 transition-all">
                        {t("scholarships.learn_more")}
                      </span>
                      <ArrowRight
                        className="arrow-icon transition-all duration-300"
                        size={18}
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {/* More Opportunities Button */}
        <div className="text-center mt-12">
            <a 
                href={ALL_OPPORTUNITIES_ROUTE}
                className="inline-flex items-center space-x-2 px-8 py-3 text-lg font-bold rounded-full text-white bg-gradient-to-r from-[#D9534F] to-[#FFC843] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
                <span>{t("scholarships.more_opportunities")}</span>
                <ChevronRight size={20} />
            </a>
        </div>
      </div>
    </section>
  );
}