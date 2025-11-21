import React from "react";
import {
  Zap,
  Mic,
  MessageCircle,
  CheckCircle,
  Shield,
  ChevronRight,
} from "lucide-react";

// --- THEME COLORS (for reference) ---
const BRIGHT_CORAL = "#D9534F";
const DEEP_ORANGE = "#CD4628";
const SUNNY_YELLOW = "#FFC843";

export default function FinalCTASection() {
  return (
    <div className="bg-[#FBFBFB] py-20">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Box: Deep Coral/Red/Yellow Gradient */}{" "}
        <div
          className="relative bg-gradient-to-br from-[#D9534F] via-[#CD4628] to-[#FFC843] rounded-[40px] p-16 text-center overflow-hidden shadow-2xl shadow-[#CD4628]/50"
          style={{ boxShadow: `0 15px 40px rgba(217, 83, 79, 0.4)` }}
        >
          {/* Background Decoration */}{" "}
          <div className="absolute inset-0 overflow-hidden">
            {" "}
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48 animate-pulse"
              style={{ animationDuration: "3s" }}
            ></div>{" "}
            <div
              className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48 animate-pulse"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>{" "}
          </div>
          {/* Foreground Content */}{" "}
          <div className="relative z-10">
            {" "}
            {/* Icon: Shield (representing Schemes/Protection) */}{" "}
            <div className="bg-white/30 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/20">
              {" "}
              <Shield
                className="text-white fill-white animate-bounce"
                size={48}
              />{" "}
            </div>{" "}
            <h2 className="text-5xl font-bold text-white mb-6">
              Find the Government Scheme That's Right for You{" "}
            </h2>{" "}
            <p className="text-white/90 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Filter our complete database of central and state government
              schemes by your age, region, and needs.{" "}
            </p>{" "}
            <div className="flex justify-center gap-6 flex-wrap">
              {" "}
              {/* Button 1: White background, Coral text (Direct Link to Schemes Page) */}{" "}
              <a
                href="#"
                className="bg-white text-[#D9534F] font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                {" "}
                <Zap
                  size={22}
                  className="group-hover:rotate-12 transition-transform"
                />{" "}
                View All Schemes{" "}
              </a>{" "}
            </div>
            {/* Footer Accents */}{" "}
            <div className="mt-12 flex justify-center gap-8 text-white/90">
              {" "}
              <div className="flex items-center space-x-2 font-semibold">
                {" "}
                <CheckCircle size={24} className="text-[#FFC843]" />
                <span>Quick Eligibility Checks</span>{" "}
              </div>{" "}
              <div className="flex items-center space-x-2 font-semibold">
                <Shield size={24} className="text-[#FFC843]" />
                <span>Secure Application Links</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
