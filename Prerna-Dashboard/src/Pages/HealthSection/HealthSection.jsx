import React from "react";
import CategoriesSection from "./CategoriesSection";
import AgeCareSection from "./AgeCareSection";
import SchemesSection from "./SchemesSection";
import CTASection from "./CTASection";
import HealthPrograms from "./HealthPrograms";

const HealthSection = () => {
  return (
    // Updated Background: Creamy White/Soft Pink Mix
    <div className="min-h-screen bg-gradient-to-br from-[#FBFBFB] via-[#F9E8EC] to-[#FBFBFB]">
      {/* <CategoriesSection /> */}
      <HealthPrograms />
      {/* <AgeCareSection /> */}
      {/* <SchemesSection /> */}
      <CTASection />
    </div>
  );
};

export default HealthSection;

// import React from "react";
// import CategoriesSection from "./CategoriesSection";
// import AgeCareSection from "./AgeCareSection";
// import SchemesSection from "./SchemesSection";
// import CTASection from "./CTASection";

// const HealthSection = () => {
//   return (
//     <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50">
//       <CategoriesSection />
//       <AgeCareSection />
//       <SchemesSection />
//       <CTASection />
//     </div>
//   );
// };

// export default HealthSection;

// import React, { useState } from "react";
// import {
//   HeartPulse,
//   Brain,
//   Baby,
//   Flower2,
//   Users,
//   AlarmClock,
//   Video,
//   Mic,
//   MessageSquare,
//   Calendar,
//   Stethoscope,
//   Shield,
//   Award,
//   BookOpen,
//   Sparkles,
//   ChevronRight,
//   Check,
//   Star,
//   Bell,
//   Phone,
//   MapPin,
//   Activity,
//   MessageCircle,
//   Heart,
// } from "lucide-react";

// const HealthSection = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   // Main Health Categories
//   const healthCategories = [
//     {
//       id: "maternal",
//       title: "Maternal & Pregnancy Care",
//       subtitle: "Complete pregnancy journey support",
//       icon: <Baby className="w-12 h-12" />,
//       color: "from-pink-500 to-rose-500",
//       features: [
//         "Week-by-week pregnancy tracking & tips",
//         "Safe exercises & yoga for each trimester",
//         "Nutrition plans for mother & baby",
//         "Pre & postnatal care guidance",
//         "Breastfeeding support & advice",
//         "Video consultations with gynecologists",
//       ],
//       highlight: "1M+ mothers supported",
//     },
//     {
//       id: "menstrual",
//       title: "Menstrual Health & Hygiene",
//       subtitle: "Period tracking & wellness support",
//       icon: <Flower2 className="w-12 h-12" />,
//       color: "from-purple-500 to-pink-500",
//       features: [
//         "Smart period tracker with predictions",
//         "PCOS/PCOD management guidance",
//         "Menstrual hygiene product recommendations",
//         "Pain management techniques",
//         "Fertility awareness education",
//         "Access to free sanitary products (rural areas)",
//       ],
//       highlight: "Track, understand, empower",
//     },
//     {
//       id: "mental",
//       title: "Mental Health & Wellness",
//       subtitle: "Your emotional wellbeing matters",
//       icon: <Brain className="w-12 h-12" />,
//       color: "from-indigo-500 to-purple-500",
//       features: [
//         "24/7 AI mental health companion",
//         "Stress & anxiety management tools",
//         "Depression screening & support",
//         "Meditation & mindfulness exercises",
//         "Connect with certified counselors",
//         "Support groups & community healing",
//       ],
//       highlight: "Anonymous & confidential",
//     },
//     {
//       id: "vaccination",
//       title: "Vaccination & Preventive Care",
//       subtitle: "Stay protected, stay healthy",
//       icon: <Stethoscope className="w-12 h-12" />,
//       color: "from-blue-500 to-indigo-500",
//       features: [
//         "Personalized vaccination schedules (0-100 years)",
//         "Cervical cancer (HPV) vaccination reminders",
//         "Child immunization tracking",
//         "Seasonal flu & COVID updates",
//         "Nearby vaccination centers locator",
//         "Health checkup reminders",
//       ],
//       highlight: "Never miss a vaccine",
//     },
//     {
//       id: "emergency",
//       title: "Emergency & Safety Support",
//       subtitle: "Help when you need it most",
//       icon: <AlarmClock className="w-12 h-12" />,
//       color: "from-red-500 to-pink-500",
//       features: [
//         "One-tap SOS emergency alerts",
//         "Domestic violence helpline (1091)",
//         "Medical emergency guidance",
//         "Nearest hospital/police station locator",
//         "Safety check-in features",
//         "Legal aid & support resources",
//       ],
//       highlight: "Fast response, secure help",
//     },
//     {
//       id: "general",
//       title: "General Health & Fitness",
//       subtitle: "Everyday wellness made easy",
//       icon: <Activity className="w-12 h-12" />,
//       color: "from-green-500 to-teal-500",
//       features: [
//         "AI symptom checker & diagnosis",
//         "Personalized diet & nutrition plans",
//         "Workout routines for all ages",
//         "BMI calculator & health metrics",
//         "Medicine reminders & management",
//         "Connect with verified doctors",
//       ],
//       highlight: "Your health, simplified",
//     },
//   ];

//   // AI-Powered Features
//   const aiFeatures = [
//     {
//       icon: <Mic className="w-8 h-8 text-pink-600" />,
//       title: "Voice to Video Guidance",
//       desc: "Speak in Hindi/English → AI generates personalized video responses",
//       badge: "AI Powered",
//     },
//     {
//       icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
//       title: "Sakhi - Your AI Companion",
//       desc: "24/7 bilingual chatbot for instant health answers & support",
//       badge: "Always Available",
//     },
//     {
//       icon: <Video className="w-8 h-8 text-pink-600" />,
//       title: "Visual Health Education",
//       desc: "Complex topics explained through easy-to-understand videos",
//       badge: "Multilingual",
//     },
//     {
//       icon: <Sparkles className="w-8 h-8 text-purple-600" />,
//       title: "Personalized Recommendations",
//       desc: "Age & location-based health guidance tailored just for you",
//       badge: "Smart AI",
//     },
//   ];

//   // Government Schemes Integration
//   const governmentSchemes = [
//     {
//       name: "Pradhan Mantri Matru Vandana Yojana",
//       benefit: "₹5,000 cash benefit for pregnant women",
//       icon: <Award className="w-6 h-6 text-pink-600" />,
//     },
//     {
//       name: "Janani Suraksha Yojana",
//       benefit: "Safe delivery & institutional care support",
//       icon: <Shield className="w-6 h-6 text-purple-600" />,
//     },
//     {
//       name: "Ayushman Bharat",
//       benefit: "Free health insurance up to ₹5 lakhs",
//       icon: <HeartPulse className="w-6 h-6 text-pink-600" />,
//     },
//     {
//       name: "Mission Indradhanush",
//       benefit: "Universal immunization program",
//       icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
//     },
//   ];

//   // Age-Specific Care
//   const ageGroups = [
//     { age: "0-2 years", focus: "Infant care, vaccination, nutrition" },
//     { age: "3-12 years", focus: "Growth monitoring, education health" },
//     { age: "13-19 years", focus: "Puberty, menstrual health, mental wellness" },
//     {
//       age: "20-35 years",
//       focus: "Reproductive health, pregnancy, career wellness",
//     },
//     { age: "36-50 years", focus: "Hormonal changes, preventive care" },
//     { age: "50+ years", focus: "Menopause, chronic disease management" },
//   ];

//   return (
//     <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50">
//       <section className="relative pt-20 px-6 overflow-hidden">   
//               <div className="max-w-7xl mx-auto relative z-10">
//                 {/* Badge */}
//                 <div className="text-center ">
//                   <div className="inline-flex items-center space-x-2 bg-linear-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full mb-6 border border-pink-200">
//                     <span className="text-pink-600 font-semibold">Your Health Companion - Prerna</span>
//                   </div>
//                 </div>
//                 </div>
      
//             </section>

//       {/* Main Health Categories */}
//       <section className="py-8 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Comprehensive Health Services
//             </h2>
//             <p className="text-gray-600 text-lg">
//               From pregnancy to menopause — we're with you at every stage
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {healthCategories.map((category, i) => (
//               <div
//                 key={i}
//                 className={`bg-linear-to-br ${category.color} rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}
//               >
//                 {/* Decorative Circle */}
//                 <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>

//                 <div className="relative z-10">
//                   <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
//                     {category.icon}
//                   </div>

//                   <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
//                   <p className="text-white/90 mb-6">{category.subtitle}</p>

//                   <ul className="space-y-3 mb-6">
//                     {category.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start space-x-2">
//                         <Check className="w-5 h-5 mt-0.5 shrink-0" />
//                         <span className="text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-4">
//                     <Star className="w-4 h-4" />
//                     <span className="text-sm font-semibold">
//                       {category.highlight}
//                     </span>
//                   </div>

//                   <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center space-x-2">
//                     <span>Explore {category.title}</span>
//                     <ChevronRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Age-Specific Care */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Personalized Care for Every Age
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Health guidance tailored to your life stage
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {ageGroups.map((group, i) => (
//               <div
//                 key={i}
//                 className="bg-linear-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all"
//               >
//                 <div className="flex items-center space-x-3 mb-3">
//                   <div className="bg-linear-to-r from-pink-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
//                     {i + 1}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {group.age}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600">{group.focus}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Government Schemes */}
//       <section className="py-16 px-6 bg-linear-to-br from-purple-50 to-pink-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Access Government Health Schemes
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Get benefits you deserve — simplified and explained
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {governmentSchemes.map((scheme, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-pink-100"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
//                     {scheme.icon}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">
//                       {scheme.name}
//                     </h3>
//                     <p className="text-gray-600 mb-3">{scheme.benefit}</p>
//                     <button className="text-pink-600 font-semibold flex items-center space-x-1 hover:underline">
//                       <span>Check Eligibility</span>
//                       <ChevronRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-8">
//             <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center space-x-2">
//               <span>View All 50+ Schemes</span>
//               <Award className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </section>


//       {/* CTA Section */}

//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="relative bg-linear-to-br from-pink-500 via-purple-500 to-rose-500 rounded-[60px] p-16 text-center overflow-hidden shadow-2xl">
//           {/* Background Decoration */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48"></div>
//           </div>

//           {/* Foreground Content */}
//           <div className="relative z-10">
//             <div className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
//               <Heart
//                 className="text-white fill-white animate-pulse"
//                 size={48}
//               />
//             </div>

//             <h2 className="text-5xl font-bold text-white mb-6">
//               Ready to Take Charge of Your Health?
//             </h2>

//             <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
//               Join millions of women across India who trust us for their health &
//             wellness journey
//             </p>

//             <div className="flex justify-center gap-6 flex-wrap">
//               <button className="bg-white text-pink-600 font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
//                 <Mic size={22} /> Start with Your Voice
//               </button>

//               <button className="bg-white/20 backdrop-blur-md text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
//                 <MessageCircle size={22} />
//                 <span>Chat with Sakhi</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <section className="py-20 px-6 bg-linear-to-br from-pink-500 via-purple-500 to-pink-500 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-6xl font-bold mb-6">
//             Ready to Take Charge of Your Health?
//           </h2>
//           <p className="text-xl mb-8 text-white/90">
//             Join millions of women across India who trust us for their health &
//             wellness journey
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center space-x-2">
//               <span>Get Started Free</span>
//               <ChevronRight className="w-5 h-5" />
//             </button>
//             <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center space-x-2">
//               <Mic className="w-5 h-5" />
//               <span>Try Voice Assistant</span>
//             </button>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// };

// export default HealthSection;
