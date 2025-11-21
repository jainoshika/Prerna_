import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// NOTE: Replaced react-i18next with a mock for compilation.
import {
  Menu,
  X,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  Globe,
  Mic,
  Heart,
  BookOpen,
  Layers,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// --- Custom Theme Colors ---
const COLORS = {
  PRIMARY_ACCENT: "#D9534F", // Bright Coral/Red
  SECONDARY_ACCENT: "#FFC843", // Sunny Yellow
  TERTIARY_ACCENT: "#CD4628", // Deep Burnt Orange
  SOFT_ACCENT: "#F9E8EC", // Subtle Pink
  NEUTRAL_BASE: "#FBFBFB", // Creamy White
  DARK_TEXT: "#333333", // Dark Text/Primary Text
};

// --- Main Component ---
export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [isFloating, setIsFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 🔥 Get user login status and data from localStorage
  const userString = localStorage.getItem("prerna-user");
  let user = null;
  let userInitials = "";

  try {
    if (userString) {
      user = JSON.parse(userString);
      if (user && user.fullname) {
        // Calculate initials from the first and last word of fullname
        const names = user.fullname.split(" ").filter((n) => n.length > 0);
        if (names.length >= 2) {
          userInitials = names[0].charAt(0) + names[names.length - 1].charAt(0);
        } else if (names.length === 1) {
          userInitials = names[0].charAt(0);
        }
        userInitials = userInitials.toUpperCase();
      }
    }
  } catch (e) {
    console.error("Error parsing user data from localStorage:", e);
  }
  const isAuthenticated = !!user;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsFloating(true);
      else setIsFloating(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("prerna-user");
    navigate("/auth");
    window.location.reload();
  };

  const navItems = [
    { path: "/", label: t("home") },
    { path: "/opportunities", label: t("opportunities") },
    { path: "/schemes", label: t("schemes") },
    { path: "/health", label: t("health") },
    { path: "/scholarships", label: t("scholarships") },
    { path: "/sports", label: t("sports") },
    { path: "/motivation", label: t("motivation") },
    { path: "/about-section", label: t("about") },
    { path: "/support", label: t("contact") },
  ];

  const AccountDropdown = () => (
    <div
      className="absolute right-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden z-20"
      style={{ backgroundColor: COLORS.NEUTRAL_BASE }}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      {/* Header: User Info - Gradient: Coral/Burnt Orange */}
      <div
        className="p-4"
        style={{
          background: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.TERTIARY_ACCENT})`,
        }}
      >
        <p className="text-white font-bold truncate">{user?.fullname}</p>
        <p className="text-white/80 text-xs">
          Ph: {user?.phonenumber || "N/A"}
        </p>
      </div>

      {/* Links */}
      <div className="p-2 space-y-1">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 p-3 rounded-lg text-sm font-medium hover:bg-gray-100"
          style={{ color: COLORS.DARK_TEXT }}
          onClick={() => setDropdownOpen(false)}
        >
          <User className="w-4 h-4" style={{ color: COLORS.PRIMARY_ACCENT }} />
          {t("profile")}
        </NavLink>
        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg text-sm font-medium hover:bg-gray-100"
          style={{ color: COLORS.DARK_TEXT }}
          onClick={() => setDropdownOpen(false)}
        >
          <LayoutDashboard
            className="w-4 h-4"
            style={{ color: COLORS.PRIMARY_ACCENT }}
          />
          {t("dashboard")}
        </NavLink>
        <NavLink
          to="/settings"
          className="flex items-center gap-3 p-3 rounded-lg text-sm font-medium hover:bg-gray-100"
          style={{ color: COLORS.DARK_TEXT }}
          onClick={() => setDropdownOpen(false)}
        >
          <Settings
            className="w-4 h-4"
            style={{ color: COLORS.PRIMARY_ACCENT }}
          />
          {t("settings")}
        </NavLink>
        <div
          className="border-t my-1"
          style={{ borderColor: COLORS.SOFT_ACCENT }}
        ></div>
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center gap-3 p-3 rounded-lg text-sm font-bold text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4" />
          {t("logout")}
        </button>
      </div>
    </div>
  );

  return (
    <nav
      className="fixed w-full backdrop-blur-sm shadow-md border-b z-50 transition-all duration-300"
      style={{
        backgroundColor: isFloating
          ? `${COLORS.NEUTRAL_BASE}E0`
          : COLORS.NEUTRAL_BASE,
        borderColor: COLORS.SOFT_ACCENT,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#FFC843] to-[#D9534F] tracking-wide">
            {t("title")}
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={({ isActive }) =>
                `
                  text-[#333333] font-medium transition-colors relative group
                  ${
                    isActive
                      ? "text-[#D9534F] font-extrabold" // Active link color (Coral)
                      : "hover:text-[#FFC843]" // Hover link color (Yellow)
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {/* Active + Hover underline animation - Color Updated to D9534F */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-[#D9534F] transition-all
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE: Language + Auth/Account + Burger */}
        <div className="flex items-center space-x-4 relative">
          {/* Language Switch */}
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "hi" : "en")
            } 
            className="p-2 rounded-full hover:bg-gray-100 font-semibold transition-colors flex items-center"
            style={{
              color: COLORS.DARK_TEXT,
              border: `1px solid ${COLORS.SOFT_ACCENT}`,
            }}
          >
            <Globe
              className="w-5 h-5 mr-1"
              style={{ color: COLORS.PRIMARY_ACCENT }}
            />
            <span className="text-sm">
              {i18n.language === "en" ? "हिंदी" : "English"}
            </span>
          </button>

          {/* Live Assistant Button (Permanent) */}
          <button
            className="bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              color: COLORS.PRIMARY_ACCENT,
              boxShadow: `0 4px 10px ${COLORS.PRIMARY_ACCENT}30`,
            }}
          >
            <Mic className="w-5 h-5" />
          </button>

          {/* Authentication / Account Display */}
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-all duration-300 hover:ring-4"
                style={{
                  backgroundColor: COLORS.SECONDARY_ACCENT,
                  color: COLORS.DARK_TEXT,
                  ringColor: COLORS.SOFT_ACCENT,
                }}
              >
                {userInitials}
              </button>
              {dropdownOpen && <AccountDropdown />}
            </div>
          ) : (
            <NavLink
              to="/auth"
              className="text-white px-6 py-2.5 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.05]"
              style={{
                background: `linear-gradient(to right, ${COLORS.SECONDARY_ACCENT}, ${COLORS.PRIMARY_ACCENT})`,
                color: COLORS.DARK_TEXT,
                boxShadow: `0 4px 10px ${COLORS.PRIMARY_ACCENT}40`,
              }}
            >
              {t("login")}
            </NavLink>
          )}

          {/* Mobile Burger Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: COLORS.PRIMARY_ACCENT }}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 h-screen w-full z-40 p-6 flex flex-col transition-all duration-500 md:hidden"
          style={{ backgroundColor: COLORS.NEUTRAL_BASE }}
        >
          <div className="flex justify-end mb-8">
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
              style={{ color: COLORS.PRIMARY_ACCENT }}
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="grow space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={({ isActive }) =>
                  `
                                        block text-2xl font-bold py-3 px-4 rounded-xl transition-all
                                        ${
                                          isActive
                                            ? `text-white shadow-lg`
                                            : `text-[${COLORS.DARK_TEXT}] hover:bg-gray-100`
                                        }
                                    `
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? COLORS.PRIMARY_ACCENT
                    : COLORS.NEUTRAL_BASE,
                  color: isActive ? COLORS.NEUTRAL_BASE : COLORS.DARK_TEXT,
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div
            className="mt-8 pt-6 border-t"
            style={{ borderColor: COLORS.SOFT_ACCENT }}
          >
            <button
              onClick={() => {
                i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
                setMenuOpen(false);
              }}
              className="w-full text-center py-3 text-xl font-bold rounded-xl mb-4"
              style={{
                color: COLORS.PRIMARY_ACCENT,
                border: `2px solid ${COLORS.PRIMARY_ACCENT}`,
              }}
            >
              <Globe className="w-6 h-6 inline mr-3" />
              {i18n.language === "en" ? "Switch to हिंदी" : "Switch to English"}
            </button>
            <NavLink
              to="/support"
              className="w-full flex items-center justify-center text-xl font-bold py-3 rounded-xl shadow-lg"
              style={{
                background: `linear-gradient(to right, ${COLORS.SECONDARY_ACCENT}, ${COLORS.PRIMARY_ACCENT})`,
                color: COLORS.DARK_TEXT,
              }}
            >
              <Heart className="w-6 h-6 mr-3" /> Get Support
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
