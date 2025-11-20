import React, { useState } from "react";
import {
  Heart,
  Mic,
  Sparkles,
  Star,
  Users,
  Award,
  BookOpen,
  Zap,
  Target,
  Globe,
  Video,
  MessageCircle,
  GraduationCap,
  Shield,
  Lightbulb,
  Sunrise,
  Compass,
  Crown,
  Flower2,
  Hand,
  ArrowRight,
  CheckCircle,
  Play,
  MessagesSquare,
} from "lucide-react";

export default function AboutPrernaPlatform() {
  const [activeStory, setActiveStory] = useState(0);

  const storySlides = [
    {
      title: "The Beginning",
      text: "In rural India, a young girl asked her mother about education schemes. The mother didn't know where to find information. Language barriers and complex processes kept opportunities hidden.",
      icon: <Sunrise />,
      color: "from-orange-400 to-pink-500",
    },
    {
      title: "The Realization",
      text: "Millions of women across India face similar challenges - unable to access government schemes, health information, and opportunities simply because information isn't in their language or format.",
      icon: <Lightbulb />,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "The Solution",
      text: "What if women could simply speak their questions and get video answers? What if every scheme, every opportunity was just a voice command away? Thus, Prerna was born.",
      icon: <Sparkles />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "The Mission Today",
      text: "Prerna now empowers women from ages 0-60+, covering health, education, safety, and opportunities. Every voice matters. Every woman deserves access to information that can change her life.",
      icon: <Crown />,
      color: "from-indigo-500 to-pink-500",
    },
  ];

  const whyPrernaMeans = [
    {
      icon: <Flower2 size={32} />,
      title: "प्रेरणा (Prerna)",
      subtitle: "Inspiration",
      desc: "Every woman is an inspiration. Prerna exists to inspire and be inspired by the strength of women.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Hand size={32} />,
      title: "सखी (Sakhi)",
      subtitle: "Friend & Companion",
      desc: "Our AI chatbot Sakhi is your trusted friend, always there to guide and support you through every question.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Sunrise size={32} />,
      title: "नई शुरुआत",
      subtitle: "New Beginning",
      desc: "Every interaction with Prerna is a step towards empowerment, knowledge, and a brighter future.",
      color: "from-rose-500 to-orange-500",
    },
  ];

  const coreFeatures = [
    {
      icon: <Mic size={40} />,
      title: "Voice-to-Video AI",
      subtitle: "Revolutionary Technology",
      description:
        "Speak in Hindi or English. We convert your voice to text, process your question, and generate easy-to-understand video responses. Perfect for all literacy levels.",
      linear: "from-pink-500 to-rose-600",
      stats: [
        "Voice Recognition",
        "Text Processing",
        "Video Generation",
        "Multi-language",
      ],
      howItWorks: [
        "Speak your question naturally",
        "AI converts voice to text instantly",
        "System understands your query context",
        "Generates personalized video answer",
      ],
    },
    {
      icon: <MessageCircle size={40} />,
      title: "Sakhi AI Chatbot",
      subtitle: "Your 24/7 Companion",
      description:
        "Sakhi understands your age, location, and needs. Get personalized guidance on schemes, health, education, and opportunities - always available, always helpful.",
      linear: "from-purple-500 to-indigo-600",
      stats: ["Contextual AI", "24/7 Available", "Bilingual", "Personalized"],
      howItWorks: [
        "Share your age and state on signup",
        "Sakhi learns your preferences",
        "Ask any question, get instant answers",
        "Receive tailored recommendations",
      ],
    },
    {
      icon: <Target size={40} />,
      title: "Age-Based Personalization",
      subtitle: "From Birth to Senior Years",
      description:
        "Content filtered by life stage. Schemes for newborns, education for children, career for young adults, health for seniors - perfectly matched to your needs.",
      linear: "from-rose-500 to-pink-600",
      stats: ["0-2 Years", "3-12 Years", "13-60 Years", "60+ Years"],
      howItWorks: [
        "Sign up with age & state",
        "Get age-appropriate content",
        "Track life-stage milestones",
        "Access relevant opportunities",
      ],
    },
    {
      icon: <Globe size={40} />,
      title: "Bilingual Support",
      subtitle: "Breaking Language Barriers",
      description:
        "Full support in Hindi and English. Rural or urban, educated or not - everyone deserves access to information in their preferred language.",
      linear: "from-indigo-500 to-purple-600",
      stats: [
        "Hindi Content",
        "English Content",
        "Voice in Both",
        "Video Subtitles",
      ],
      howItWorks: [
        "Choose your preferred language",
        "Switch anytime with one tap",
        "Voice works in both languages",
        "Videos auto-subtitled",
      ],
    },
  ];

  const platformPillars = [
    {
      icon: <GraduationCap size={48} />,
      title: "Education & Opportunities",
      desc: "Scholarships, fellowships, skill training, sports programs, career guidance - personalized by age and interests.",
      color: "from-purple-500 to-indigo-500",
      examples: [
        "500+ Schemes",
        "Career Paths",
        "Scholarship Alerts",
        "Skill Courses",
      ],
    },
    {
      icon: <Heart size={48} />,
      title: "Health & Wellness",
      desc: "Vaccination schedules, menstrual health, maternal care, nutrition, mental health support - comprehensive health guidance.",
      color: "from-pink-500 to-rose-500",
      examples: [
        "Vaccination Tracker",
        "Period Calendar",
        "Health Tips",
        "Doctor Finder",
      ],
    },
    {
      icon: <Shield size={48} />,
      title: "Safety & Legal Rights",
      desc: "Emergency helplines, legal aid, safety tools, rights awareness - ensuring every woman feels secure and informed.",
      color: "from-red-500 to-pink-500",
      examples: ["SOS Button", "Helpline 181", "Legal Guidance", "Safety Tips"],
    },
    {
      icon: <Sparkles size={48} />,
      title: "Government Schemes",
      desc: "Complete database of central and state schemes with easy application processes and deadline tracking.",
      color: "from-indigo-500 to-purple-500",
      examples: [
        "Scheme Finder",
        "Eligibility Check",
        "Application Help",
        "Status Tracker",
      ],
    },
  ];

  // AI-Powered Features
  const aiFeatures = [
    {
      icon: <Mic className="w-8 h-8 text-pink-600" />,
      title: "Voice to Video Guidance",
      desc: "Speak in Hindi/English → AI generates personalized video responses",
      badge: "AI Powered",
    },
    {
      icon: <MessagesSquare className="w-8 h-8 text-purple-600" />,
      title: "Sakhi - Your AI Companion",
      desc: "24/7 bilingual chatbot for instant health answers & support",
      badge: "Always Available",
    },
    {
      icon: <Video className="w-8 h-8 text-pink-600" />,
      title: "Visual Health Education",
      desc: "Complex topics explained through easy-to-understand videos",
      badge: "Multilingual",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Personalized Recommendations",
      desc: "Age & location-based health guidance tailored just for you",
      badge: "Smart AI",
    },
  ];

  const impactGoals = [
    {
      number: "10M+",
      label: "Women Reached",
      color: "from-pink-500 to-rose-500",
      icon: <Users />,
    },
    {
      number: "1000+",
      label: "Schemes Accessible",
      color: "from-purple-500 to-indigo-500",
      icon: <Award />,
    },
    {
      number: "50+",
      label: "Languages (Goal)",
      color: "from-rose-500 to-pink-500",
      icon: <Globe />,
    },
    {
      number: "100%",
      label: "Free Access",
      color: "from-indigo-500 to-purple-500",
      icon: <Heart />,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50 mt-7">
      {/* The Story Behind Prerna */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-linear-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full mb-4">
            <BookOpen size={20} className="mr-2" />
            <span className="font-semibold">Our Story</span>
          </div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
            How Prerna Was Born
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            From a simple question to a powerful movement
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-pink-200 via-purple-200 to-rose-200 transform -translate-y-1/2"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 transform -translate-y-1/2 transition-all duration-500"
            style={{
              width: `${((activeStory + 1) / storySlides.length) * 100}%`,
            }}
          ></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {storySlides.map((slide, idx) => (
              <div
                key={idx}
                className={`cursor-pointer transition-all duration-500 ${
                  activeStory === idx ? "scale-105" : "opacity-70"
                }`}
                onClick={() => setActiveStory(idx)}
              >
                <div
                  className={`bg-linear-to-br ${slide.color} rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    {slide.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center">
                    {slide.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-center">
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why the Name "Prerna" */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
              Why "Prerna"?
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Every element of our platform has deep meaning and purpose
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyPrernaMeans.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-linear-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-3xl p-8 hover:border-purple-300 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`bg-linear-to-br ${item.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-purple-600 font-semibold text-center mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="group relative bg-linear-to-br from-pink-500 via-rose-500 to-pink-600 rounded-[60px] p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-16 translate-y-16"></div>

            <div className="relative z-10">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Target size={40} />
              </div>
              <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
              <div className="h-1 w-20 bg-yellow-300 rounded-full mb-6"></div>
              <p className="text-white/95 text-lg leading-relaxed mb-6">
                To create an accessible, AI-powered ecosystem where every woman
                in India—regardless of age, location, education, or language—can
                discover opportunities, access health information, understand
                her rights, and find support through simple voice commands.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-yellow-300 shrink-0 mt-1"
                    size={20}
                  />
                  <span>Break language and literacy barriers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-yellow-300 shrink-0 mt-1"
                    size={20}
                  />
                  <span>Make government schemes accessible to all</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-yellow-300 shrink-0 mt-1"
                    size={20}
                  />
                  <span>Empower through knowledge and support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative bg-linear-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-[60px] p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-16 translate-y-16"></div>

            <div className="relative z-10">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Compass size={40} />
              </div>
              <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
              <div className="h-1 w-20 bg-yellow-300 rounded-full mb-6"></div>
              <p className="text-white/95 text-lg leading-relaxed mb-6">
                To become India's most trusted digital companion for women,
                creating a future where every girl and woman is informed,
                empowered, and confident—using technology to bridge the gap
                between opportunities and access.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Star className="text-yellow-300 shrink-0 mt-1" size={20} />
                  <span>Reach 10 million women by 2026</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="text-yellow-300 shrink-0 mt-1" size={20} />
                  <span>Support in 50+ Indian languages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="text-yellow-300 shrink-0 mt-1" size={20} />
                  <span>100% free, forever</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Features Section */}
      <div className="bg-linear-to-br from-purple-50 via-pink-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-linear-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full mb-4">
              <Zap size={20} className="mr-2" />
              <span className="font-semibold">Revolutionary Technology</span>
            </div>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
              What Makes Prerna Special
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              First-of-its-kind Voice-to-Video AI platform designed exclusively
              for women empowerment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`bg-linear-to-br ${feature.linear} p-8 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="relative z-10">
                    <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {feature.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-linear-to-r from-pink-50 to-purple-50 rounded-xl p-3 border border-pink-200 text-center"
                      >
                        <p className="text-sm font-semibold text-gray-700">
                          {stat}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* How It Works */}
                  <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                    <p className="text-sm font-bold text-purple-700 mb-4 flex items-center">
                      <Play size={16} className="mr-2" />
                      How It Works:
                    </p>
                    <div className="space-y-2">
                      {feature.howItWorks.map((step, hIdx) => (
                        <div key={hIdx} className="flex items-start space-x-2">
                          <div className="bg-linear-to-r from-pink-500 to-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {hIdx + 1}
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Pillars */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
            Four Pillars of Empowerment
          </h2>
          <p className="text-gray-600 text-xl">
            Complete support across every aspect of life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              <div
                className={`bg-linear-to-br ${pillar.color} p-6 text-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 transform -skew-y-6 scale-150"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {pillar.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                  {pillar.desc}
                </p>

                <div className="space-y-2">
                  {pillar.examples.map((example, eIdx) => (
                    <div
                      key={eIdx}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <CheckCircle
                        className="text-pink-500 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI-Powered Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionary <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600">AI Technology</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Breaking barriers with voice-to-video AI that understands your language
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, i) => (
              <div key={i} className="bg-linear-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-pink-100">
                <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <div className="inline-block bg-linear-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                  {feature.badge}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Voice to Video Showcase */}
          <div className="mt-12 bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  How Voice-to-Video Works
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "Speak your health query in Hindi or English" },
                    { step: "2", text: "AI converts your voice to text instantly" },
                    { step: "3", text: "Smart AI understands your concern" },
                    { step: "4", text: "Watch personalized video response" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="bg-white text-pink-600 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <p className="text-lg">{item.text}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-6 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center space-x-2">
                  <span>Try Voice Assistant</span>
                  <Mic className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center">
                  <Video className="w-20 h-20 text-white animate-pulse" />
                </div>
                <p className="text-center mt-4 text-white/90">
                  "No more reading complex medical terms — just speak and watch!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals Section */}
      {/* <div className="bg-linear-to-r from-pink-600 via-purple-600 to-rose-600 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Our Impact Goals
            </h2>
            <p className="text-white/90 text-xl">
              Building a movement, not just a platform
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactGoals.map((goal, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div
                    className={`bg-linear-to-br ${goal.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    {goal.icon}
                  </div>
                  <h3 className="text-5xl font-bold text-white mb-2">
                    {goal.number}
                  </h3>
                  <p className="text-white/90 font-semibold">{goal.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/95 text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              "Every woman we reach, every question we answer, every opportunity
              we unlock - that's our success story."
            </p>
          </div>
        </div>
      </div> */}

      {/* Join Movement CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-linear-to-br from-pink-500 via-purple-500 to-rose-500 rounded-[60px] p-16 text-center overflow-hidden shadow-2xl">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48"></div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart
                className="text-white fill-white animate-pulse"
                size={48}
              />
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Be Part of the Prerna Movement
            </h2>

            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join millions of women who are transforming their lives with the
              power of voice, knowledge, and technology. Prerna is more than a
              platform — it’s a nationwide movement towards empowerment,
              equality, and opportunity.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <button className="bg-white text-pink-600 font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Mic size={22} /> Start with Your Voice
              </button>

              <button className="bg-white/20 backdrop-blur-md text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <MessageCircle size={22} />
                <span>Chat with Sakhi</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final Closing Section */}
      <div className="py-20 bg-linear-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-6">
            Together, We Create Change
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Prerna is not just a platform — it is a revolution powered by every
            woman who chooses to learn, grow, and unlock her full potential.
            Your voice can inspire a million others.
          </p>

          <button className="bg-linear-to-r from-pink-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto">
            Start Your Journey <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
