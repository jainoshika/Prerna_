# 🌸 **Prerna — AI-Powered Opportunity Assistant for Rural Women**

*A bilingual voice-first platform enabling women to discover government schemes, scholarships, and opportunities.*

Prerna is an **AI-powered assistant** built to bridge the information gap for rural and semi-urban women. It provides **personalized recommendations**, **native-language voice support**, and **instant query resolution**—all inside a warm, simple, Hindi-first interface.

I designed and built the entire system end-to-end:  
**FastAPI backend · React frontend · Voice assistant · Speech-to-text pipeline · Gemini LLM · MongoDB · Authentication · Recommendation engine.**

---

## ✨ **Features**

### 🎙️ **Bilingual Voice Assistant**
- Full **Hindi + English** support  
- Natural voice commands for browsing opportunities  
- Uses **AssemblyAI** + custom noise-handled transcription  
- Optimized for low-connectivity regions  

---

### 🧠 **AI Intent Classification**
Gemini-powered model classifies user intents like:
- Scheme search  
- Scholarship info  
- Eligibility doubts  
- Application queries  

**Fine-tuned prompts + scoring logic** ensure high accuracy.  
Handles dialects commonly spoken by rural girls.

---

### 🎯 **Personalized Recommendation System**
- Uses **embeddings + metadata filters**  
- Recommends:
  - Government schemes  
  - Scholarships  
  - Skill programs  

Learns from **user interests, age, background, education**.

---

### 🌐 **Warm, Earthy UI**
- React + Tailwind, handcrafted for rural accessibility  
- Bilingual interface with simple icons  
- Friendly color palette  
- Fully mobile-responsive  

---

### 🔐 **Secure Backend**
- FastAPI-powered REST API  
- JWT authentication  
- MongoDB for scalable storage  
- Clean microservice-ready architecture  

---

## 🏗️ **Architecture**

Prerna consists of **5 main components**:

1. **Frontend (React)** – Voice interface, UI, Hindi/English screens  
2. **Backend (FastAPI / Node)** – APIs, auth, routing, recommendations  
3. **AI Layer (Gemini models)** – Intent understanding, content generation  
4. **STT/TTS Layer (AssemblyAI)** – Accent-optimized speech pipeline  
5. **Database (MongoDB)** – User profiles, history, opportunities  

---

## 🛠️ **Tech Stack**

### **Frontend**
- React  
- TailwindCSS  
- Context API  
- Custom Hindi UI components  

### **Backend**
- FastAPI  
- Python  
- JWT Auth  
- Pydantic  
- MongoDB + Motor ORM  

### **AI & Voice**
- Gemini Pro APIs  
- AssemblyAI STT  
- Custom Hindi phoneme mapping  
- Intent classification + scoring system  
- BERT embeddings for recommendation  

---

## 📌 **Key Outcomes & Impact**
- **Higher Opportunity Access:** Women instantly find relevant schemes & scholarships  
- **Improved Confidence:** Native-language, voice-first UI makes tech approachable  
- **Increased Awareness:** Info across education, health, finance, skills  
- **Personalized Guidance:** Feed tailored to each woman's background  

---

## 🚀 **Future Enhancements**
- Offline-friendly mode  
- RAG-based knowledge base  
- Smart bookmarking & reminders  
- Community discussion spaces  

---
