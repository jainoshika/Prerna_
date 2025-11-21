import React from "react";
import AgeBasedSection from "./AgeBased/AgeBasedSection";
import MainCategorySection from "./MainCategorySection/MainCategorySection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import FinalCTASection from "./FinalCTASection/FinalCTASection";
import AllSchemes from "./AllSchemes";

export default function Schemes() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50">

      {/* <AgeBasedSection /> */}
      <MainCategorySection />
      <AllSchemes />
      {/* <TestimonialSection /> */}
      <FinalCTASection />

    </div>
  );
}


// import React, { useState } from "react";
// import { 
//   GraduationCap, 
//   Sparkles, 
//   ShieldCheck, 
//   Heart,
//   Users,
//   Briefcase,
//   Home,
//   Baby,
//   Award,
//   Mic,
//   Video,
//   MessageCircle,
//   Calendar,
//   Stethoscope,
//   Droplet,
//   TrendingUp,
//   Globe,
//   ChevronRight,
//   Star,
//   Zap,
//   Shield,
//   BookOpen,
//   Phone,
//   CheckCircle,
//   ArrowRight,
//   Target,
//   Smile,
//   Activity
// } from "lucide-react";

// export default function SakhiPlatform() {
//   const [activeTab, setActiveTab] = useState('all');

//   const heroFeatures = [
//     {
//       icon: <Mic className="text-pink-600" size={24} />,
//       title: "Voice Input",
//       desc: "Speak in Hindi or English"
//     },
//     {
//       icon: <Video className="text-purple-600" size={24} />,
//       title: "Video Responses",
//       desc: "AI-generated video answers"
//     },
//     {
//       icon: <MessageCircle className="text-rose-600" size={24} />,
//       title: "Sakhi Chatbot",
//       desc: "24/7 personalized guidance"
//     },
//     {
//       icon: <Globe className="text-indigo-600" size={24} />,
//       title: "Bilingual",
//       desc: "Hindi & English support"
//     }
//   ];

//   const ageBasedCategories = [
//     {
//       age: "0-5 Years",
//       icon: <Baby size={32} />,
//       color: "from-pink-400 to-rose-400",
//       schemes: ["Vaccination Schedule", "Nutrition Programs", "Child Development", "Birth Registration"],
//       count: 12
//     },
//     {
//       age: "6-12 Years",
//       icon: <BookOpen size={32} />,
//       color: "from-purple-400 to-pink-400",
//       schemes: ["Education Schemes", "Sports Programs", "School Nutrition", "Scholarship Info"],
//       count: 18
//     },
//     {
//       age: "13-18 Years",
//       icon: <Sparkles size={32} />,
//       color: "from-rose-400 to-pink-500",
//       schemes: ["Menstrual Hygiene", "Career Guidance", "Skill Training", "Safety Programs"],
//       count: 24
//     },
//     {
//       age: "19-35 Years",
//       icon: <Briefcase size={32} />,
//       color: "from-purple-500 to-indigo-500",
//       schemes: ["Employment", "Entrepreneurship", "Health & Wellness", "Marriage Support"],
//       count: 35
//     },
//     {
//       age: "36-60 Years",
//       icon: <Heart size={32} />,
//       color: "from-pink-500 to-purple-500",
//       schemes: ["Healthcare", "Financial Security", "Skill Upgradation", "Legal Rights"],
//       count: 28
//     },
//     {
//       age: "60+ Years",
//       icon: <Shield size={32} />,
//       color: "from-indigo-500 to-purple-600",
//       schemes: ["Pension Schemes", "Healthcare", "Senior Benefits", "Social Security"],
//       count: 16
//     }
//   ];

//   const mainCategories = [
//     {
//       id: 'education',
//       icon: <GraduationCap size={40} className="text-white" />,
//       title: "Education & Scholarships",
//       description: "From primary to higher education - scholarships, fellowships, and learning programs for every age",
//       linear: "from-purple-500 via-purple-600 to-indigo-600",
//       schemes: [
//         { name: "Beti Bachao Beti Padhao", age: "0-18 years" },
//         { name: "Post Matric Scholarship", age: "18+ years" },
//         { name: "National Fellowship", age: "25+ years" },
//         { name: "Merit cum Means Scholarship", age: "School-College" }
//       ],
//       features: ["Age-based filtering", "Application guidance", "Document checklist", "Deadline alerts"]
//     },
//     {
//       id: 'health',
//       icon: <Heart size={40} className="text-white" />,
//       title: "Health & Wellness",
//       description: "Maternal health, vaccination schedules, menstrual hygiene, nutrition programs and medical support",
//       linear: "from-pink-500 via-rose-500 to-pink-600",
//       schemes: [
//         { name: "Pradhan Mantri Matru Vandana Yojana", age: "Pregnant women" },
//         { name: "Janani Suraksha Yojana", age: "Maternal care" },
//         { name: "Vaccination Programs", age: "All ages" },
//         { name: "Free Health Check-ups", age: "Women 30+" }
//       ],
//       features: ["Vaccination tracker", "Period calendar", "Health tips", "Hospital locator"]
//     },
//     {
//       id: 'menstrual',
//       icon: <Droplet size={40} className="text-white" />,
//       title: "Menstrual Health & Hygiene",
//       description: "Comprehensive guidance on menstrual health, hygiene products, myths vs facts, and support resources",
//       linear: "from-rose-500 via-pink-500 to-rose-600",
//       schemes: [
//         { name: "Free Sanitary Napkin Schemes", age: "13-50 years" },
//         { name: "Menstrual Hygiene Awareness", age: "Schools & Communities" },
//         { name: "PCOS/PCOD Support Programs", age: "Women 18-40" },
//         { name: "Reproductive Health Education", age: "Adolescents" }
//       ],
//       features: ["Period tracker", "Myth busters", "Product guidance", "Pain management tips"]
//     },
//     {
//       id: 'safety',
//       icon: <ShieldCheck size={40} className="text-white" />,
//       title: "Safety & Legal Support",
//       description: "24/7 helplines, legal aid, protection schemes, and immediate support for women in distress",
//       linear: "from-indigo-500 via-purple-500 to-pink-500",
//       schemes: [
//         { name: "One Stop Centre", age: "All women" },
//         { name: "Women Helpline 181", age: "Emergency support" },
//         { name: "Nirbhaya Fund Programs", age: "Safety initiatives" },
//         { name: "Legal Aid Services", age: "Free legal help" }
//       ],
//       features: ["SOS alert", "Helpline numbers", "Legal guidance", "Safety tips"]
//     },
//     {
//       id: 'employment',
//       icon: <Briefcase size={40} className="text-white" />,
//       title: "Employment & Entrepreneurship",
//       description: "Job opportunities, skill training, business loans, and career advancement programs",
//       linear: "from-purple-500 via-indigo-500 to-purple-600",
//       schemes: [
//         { name: "Mahila Shakti Kendra", age: "Women 18-60" },
//         { name: "Stand-Up India", age: "Entrepreneurs" },
//         { name: "Mudra Yojana", age: "Business loans" },
//         { name: "Skill India Digital", age: "All ages" }
//       ],
//       features: ["Job portal", "Skill courses", "Loan calculator", "Mentor connect"]
//     },
//     {
//       id: 'sports',
//       icon: <Award size={40} className="text-white" />,
//       title: "Sports & Fitness",
//       description: "Sports scholarships, training programs, competition opportunities, and fitness guidance",
//       linear: "from-pink-500 via-rose-500 to-purple-500",
//       schemes: [
//         { name: "Khelo India Programme", age: "8-25 years" },
//         { name: "Sports Scholarship for Girls", age: "School-College" },
//         { name: "State-level Training", age: "All ages" },
//         { name: "Women's Sports Academy", age: "Professional training" }
//       ],
//       features: ["Training centers", "Competition calendar", "Scholarship info", "Fitness plans"]
//     }
//   ];

//   const aiFeatures = [
//     {
//       icon: <Mic size={32} />,
//       title: "Voice-to-Text",
//       desc: "Speak naturally in Hindi or English. Our AI understands rural and urban accents",
//       color: "from-pink-500 to-rose-500",
//       example: "बोलिए: मुझे शिक्षा योजना चाहिए"
//     },
//     {
//       icon: <MessageCircle size={32} />,
//       title: "Sakhi AI Chatbot",
//       desc: "Your personal guide who understands your context, age, and needs",
//       color: "from-purple-500 to-indigo-500",
//       example: "Ask: Schemes for my 10-year-old daughter"
//     },
//     {
//       icon: <Video size={32} />,
//       title: "Video Responses",
//       desc: "Get answers as easy-to-understand videos in your preferred language",
//       color: "from-rose-500 to-pink-500",
//       example: "Watch: How to apply for scholarships"
//     },
//     {
//       icon: <Target size={32} />,
//       title: "Personalized Recommendations",
//       desc: "Schemes filtered by your age, state, and life situation",
//       color: "from-indigo-500 to-purple-500",
//       example: "Based on: Age 25, Maharashtra, Student"
//     }
//   ];

//   const quickActions = [
//     { icon: <Phone />, text: "Emergency Helpline", color: "bg-red-500", number: "181" },
//     { icon: <Stethoscope />, text: "Health Support", color: "bg-pink-500", number: "104" },
//     { icon: <Shield />, text: "Police Help", color: "bg-indigo-500", number: "100" },
//     { icon: <Heart />, text: "Mental Health", color: "bg-purple-500", number: "KIRAN" }
//   ];

//   return (
//     <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50">
      


//       {/* Age-Based Personalization Section */}
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-4 space-x-2">
//               <Users size={20} />
//               <span className="font-semibold">Personalized for Every Age</span>
//             </div>
//             <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 mb-4">
//               Schemes Based on Your Age
//             </h2>
//             <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//               From newborn to senior citizen - tailored support for every stage of life
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {ageBasedCategories.map((category, idx) => (
//               <div key={idx} className="group bg-linear-to-br from-white to-purple-50 border-2 border-purple-200 rounded-3xl overflow-hidden hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
//                 <div className={`bg-linear-to-r ${category.color} p-6 text-white`}>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
//                       {category.icon}
//                     </div>
//                     <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//                       <span className="font-bold">{category.count} Schemes</span>
//                     </div>
//                   </div>
//                   <h3 className="text-2xl font-bold">{category.age}</h3>
//                 </div>

//                 <div className="p-6">
//                   <div className="space-y-3 mb-4">
//                     {category.schemes.map((scheme, sIdx) => (
//                       <div key={sIdx} className="flex items-center space-x-3 p-3 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300">
//                         <CheckCircle className="text-purple-600 flex-shrink-0" size={18} />
//                         <span className="text-gray-700 text-sm font-medium">{scheme}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <button className={`w-full bg-linear-to-r ${category.color} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
//                     <span>Explore All</span>
//                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Categories Section */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
//             Complete Support Categories
//           </h2>
//           <p className="text-gray-600 text-xl">
//             Everything you need - from education to employment, health to safety
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mainCategories.map((category, idx) => (
//             <div key={idx} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
//               {/* Gradient Header */}
//               <div className={`bg-linear-to-br ${category.linear} p-8 relative overflow-hidden`}>
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
//                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>
                
//                 <div className="relative z-10">
//                   <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
//                     {category.icon}
//                   </div>
//                   <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <p className="text-gray-600 text-base leading-relaxed mb-6">
//                   {category.description}
//                 </p>

//                 {/* Scheme List */}
//                 <div className="space-y-3 mb-6">
//                   {category.schemes.map((scheme, sIdx) => (
//                     <div key={sIdx} className="p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group/item border border-pink-100">
//                       <div className="flex items-start justify-between mb-1">
//                         <span className="text-gray-800 text-sm font-bold">{scheme.name}</span>
//                         <ChevronRight className="text-gray-400 group-hover/item:text-purple-600 group-hover/item:translate-x-1 transition-all duration-300 flex-shrink-0" size={18} />
//                       </div>
//                       <span className="text-xs text-purple-600 font-medium">{scheme.age}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Features */}
//                 <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4 border border-purple-100">
//                   <p className="text-xs font-semibold text-purple-700 mb-2">✨ Features:</p>
//                   <div className="grid grid-cols-2 gap-2">
//                     {category.features.map((feature, fIdx) => (
//                       <div key={fIdx} className="flex items-center space-x-1">
//                         <Star className="text-pink-500" size={12} />
//                         <span className="text-xs text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* View All Button */}
//                 <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
//                   <span>Explore {category.title.split('&')[0]}</span>
//                   <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Testimonials / Success Stories */}
//       <div className="bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-5xl font-bold text-white mb-4">
//               Empowering Women Across India
//             </h2>
//             <p className="text-white/90 text-xl">
//               Real stories of transformation and success
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { name: "Priya, Age 16", location: "Rural Bihar", story: "Found scholarship for engineering through voice search", icon: <GraduationCap /> },
//               { name: "Anita, Age 28", location: "Mumbai", story: "Started business with Stand-Up India loan guidance", icon: <Briefcase /> },
//               { name: "Lakshmi, Age 45", location: "Karnataka Village", story: "Accessed health schemes in her language", icon: <Heart /> }
//             ].map((testimonial, idx) => (
//               <div key={idx} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
//                 <div className="bg-white text-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
//                   {testimonial.icon}
//                 </div>
//                 <p className="text-white text-lg mb-4 italic">"{testimonial.story}"</p>
//                 <div className="text-center">
//                   <p className="text-white font-bold">{testimonial.name}</p>
//                   <p className="text-white/80 text-sm">{testimonial.location}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Final CTA Section */}
//       <div className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl p-16 text-center relative overflow-hidden">
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//               <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 transform translate-x-48 -translate-y-48"></div>
//               <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 transform -translate-x-48 translate-y-48"></div>
//             </div>

//             <div className="relative z-10">
//               <Smile className="text-yellow-300 mx-auto mb-6" size={64} />
//               <h2 className="text-5xl font-bold text-white mb-6">
//                 Ready to Start Your Journey?
//               </h2>
//               <p className="text-white/95 text-2xl mb-10 max-w-3xl mx-auto">
//                 Join millions of women discovering their rights, opportunities, and support
//               </p>
//               <div className="flex flex-wrap justify-center gap-6">
//                 <button className="bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3">
//                   <Mic size={28} />
//                   <span>Start with Your Voice</span>
//                 </button>
//                 <button className="bg-purple-600/30 backdrop-blur-md border-3 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-purple-600/50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3">
//                   <MessageCircle size={28} />
//                   <span>Chat with Sakhi Now</span>
//                 </button>
//               </div>
              
//               <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle size={24} />
//                   <span className="font-semibold">Bilingual Support</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

      

//     </div>
//   );
// }
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { 
//   GraduationCap, 
//   Sparkles, 
//   ShieldCheck, 
//   Heart,
//   Users,
//   Briefcase,
//   Home,
//   Baby,
//   TrendingUp,
//   Award,
//   BookOpen,
//   DollarSign,
//   ChevronRight
// } from "lucide-react";

// export default function Schemes() {
//   const { t } = useTranslation();

//   const schemeCategories = [
//     {
//       icon: <GraduationCap size={40} className="text-white" />,
//       title: t("scheme_education_title") || "Education & Scholarships",
//       description: t("scheme_education_desc") || "Government scholarships, educational grants, and learning programs for girls and women.",
//       linear: "from-purple-500 to-indigo-600",
//       schemes: [
//         "Beti Bachao Beti Padhao",
//         "Post Matric Scholarship",
//         "National Fellowship",
//         "Merit Scholarship"
//       ]
//     },
//     {
//       icon: <Sparkles size={40} className="text-white" />,
//       title: t("scheme_empowerment_title") || "Skill & Empowerment",
//       description: t("scheme_empowerment_desc") || "Skill-building programs, digital literacy courses, and entrepreneurship support.",
//       linear: "from-pink-500 to-rose-600",
//       schemes: [
//         "Skill India Digital",
//         "PMKVY Training",
//         "Mahila E-Haat",
//         "Stand-Up India"
//       ]
//     },
//     {
//       icon: <ShieldCheck size={40} className="text-white" />,
//       title: t("scheme_safety_title") || "Safety & Protection",
//       description: t("scheme_safety_desc") || "Safety initiatives, legal help schemes, and protection fund for women.",
//       linear: "from-rose-500 to-pink-600",
//       schemes: [
//         "One Stop Centre",
//         "Women Helpline",
//         "Nirbhaya Fund",
//         "Legal Aid Services"
//       ]
//     },
//     {
//       icon: <Heart size={40} className="text-white" />,
//       title: "Health & Wellness",
//       description: "Maternal health, nutrition programs, and comprehensive healthcare schemes for women.",
//       linear: "from-pink-500 to-purple-600",
//       schemes: [
//         "Pradhan Mantri Matru Vandana Yojana",
//         "Janani Suraksha Yojana",
//         "Free Health Check-ups",
//         "Nutrition Programs"
//       ]
//     },
//     {
//       icon: <Briefcase size={40} className="text-white" />,
//       title: "Employment & Career",
//       description: "Job opportunities, career guidance, and financial support for working women.",
//       linear: "from-purple-500 to-pink-600",
//       schemes: [
//         "Mahila Shakti Kendra",
//         "Working Women Hostel",
//         "Mudra Yojana",
//         "Employment Guarantee"
//       ]
//     },
//     {
//       icon: <Home size={40} className="text-white" />,
//       title: "Housing & Finance",
//       description: "Housing schemes, loans, and financial assistance programs for women.",
//       linear: "from-rose-500 to-purple-600",
//       schemes: [
//         "Pradhan Mantri Awas Yojana",
//         "Women Housing Loan",
//         "Sukanya Samriddhi Yojana",
//         "Interest Subsidy Scheme"
//       ]
//     }
//   ];

//   const popularSchemes = [
//     {
//       name: "Beti Bachao Beti Padhao",
//       category: "Education",
//       icon: <GraduationCap size={24} />,
//       color: "from-purple-500 to-indigo-500"
//     },
//     {
//       name: "Pradhan Mantri Matru Vandana Yojana",
//       category: "Health",
//       icon: <Heart size={24} />,
//       color: "from-pink-500 to-rose-500"
//     },
//     {
//       name: "Mahila Shakti Kendra",
//       category: "Empowerment",
//       icon: <Sparkles size={24} />,
//       color: "from-rose-500 to-pink-500"
//     },
//     {
//       name: "Stand-Up India",
//       category: "Employment",
//       icon: <Briefcase size={24} />,
//       color: "from-purple-500 to-pink-500"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50">
      
//       {/* Hero Section */}
//       <div className="relative bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 py-20 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//           <div className="inline-block mb-4">
//             <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">
//               Government Initiatives
//             </span>
//           </div>
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//             {t("our_schemes_title") || "Empowerment Schemes"}
//           </h1>
//           <p className="text-white/95 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
//             Discover government schemes designed to support, empower, and uplift women across India
//           </p>
//         </div>
//       </div>

//       {/* Popular Schemes Quick Access */}
//       <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
//         <div className="bg-white rounded-3xl shadow-2xl p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//             <Award className="text-pink-600 mr-3" size={28} />
//             Popular Schemes
//           </h2>
//           <div className="grid md:grid-cols-4 gap-4">
//             {popularSchemes.map((scheme, idx) => (
//               <div 
//                 key={idx}
//                 className="group bg-linear-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-2xl p-4 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
//               >
//                 <div className={`bg-linear-to-r ${scheme.color} w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform duration-300`}>
//                   {scheme.icon}
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">{scheme.name}</h3>
//                 <p className="text-xs text-gray-600">{scheme.category}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Schemes Grid */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
//             All Schemes & Programs
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Comprehensive support across education, health, safety, and employment
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {schemeCategories.map((category, idx) => (
//             <div
//               key={idx}
//               className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
//             >
//               {/* Gradient Header */}
//               <div className={`bg-linear-to-br ${category.linear} p-8 relative overflow-hidden`}>
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
//                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>
                
//                 <div className="relative z-10">
//                   <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
//                     {category.icon}
//                   </div>
//                   <h3 className="text-white text-2xl font-bold mb-2">
//                     {category.title}
//                   </h3>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <p className="text-gray-600 text-base leading-relaxed mb-6">
//                   {category.description}
//                 </p>

//                 {/* Scheme List */}
//                 <div className="space-y-3 mb-6">
//                   {category.schemes.map((scheme, sIdx) => (
//                     <div 
//                       key={sIdx}
//                       className="flex items-center space-x-3 p-3 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group/item"
//                     >
//                       <div className="w-2 h-2 bg-linear-to-r from-pink-500 to-purple-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
//                       <span className="text-gray-700 text-sm font-medium grow">{scheme}</span>
//                       <ChevronRight className="text-gray-400 group-hover/item:text-purple-600 group-hover/item:translate-x-1 transition-all duration-300" size={16} />
//                     </div>
//                   ))}
//                 </div>

//                 {/* View All Button */}
//                 <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
//                   <span>View All Schemes</span>
//                   <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom CTA Section */}
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl p-12 text-center relative overflow-hidden">
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-32 -translate-y-32"></div>
//               <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-10 transform -translate-x-40 translate-y-40"></div>
//             </div>

//             <div className="relative z-10">
//               <h2 className="text-4xl font-bold text-white mb-4">
//                 Need Help Finding the Right Scheme?
//               </h2>
//               <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
//                 Our AI assistant can help you discover schemes tailored to your needs
//               </p>
//               <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3 mx-auto">
//                 <Users size={24} />
//                 <span>Get Personalized Recommendations</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }



     