import React from "react";
import { ChevronRight, Zap, Target, MessageCircle } from "lucide-react";
import { BsRocket } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const BRIGHT_CORAL = "#D9534F";
  const DEEP_ORANGE = "#CD4628";
  const SUNNY_YELLOW = "#FFC843";

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* CTA Box: Deep Coral/Red Gradient */}
      <div className="relative bg-linear-to-br from-[#D9534F] via-[#CD4628] to-[#D9534F] rounded-[60px] p-16 text-center overflow-hidden shadow-2xl shadow-[#CD4628]/50">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* Icon: Changed to Target (Opportunity/Goal) */}
          <div className="bg-white/30 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <BsRocket
              className="text-white fill-white animate-pulse"
              size={48}
            />
          </div>

          <h2 className="text-5xl font-bold text-white mb-6">
            {t("CTASection.title")}
          </h2>

          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("CTASection.subtitle")}
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {/* Button 1: White background, Coral text (Direct Search) */}
            <a
              href="#"
              className="bg-white text-[#D9534F] font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Zap size={22} /> {t("CTASection.button_explore")}
            </a>

            {/* Button 2: White/Yellow border, White text (Chat with Sakhi) */}
            <button className="bg-white/20 backdrop-blur-md text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-[#FFC843]/50">
              <MessageCircle size={22} />
              <span>{t("CTASection.button_ask_sakhi")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
