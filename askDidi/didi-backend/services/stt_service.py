# stt_service.py

import os
import uuid
import subprocess
import google.generativeai as genai
from dotenv import load_dotenv
import speech_recognition as sr

# -----------------------
# LOAD ENV + GEMINI CONFIG
# -----------------------
load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")
MODEL_NAME = "gemini-2.0-flash"

genai.configure(api_key=API_KEY)


# -----------------------
# WEBM → WAV CONVERSION
# -----------------------
def convert_webm_to_wav(input_path):
    """
    Converts WEBM/OGG/MP3 audio → 16k mono WAV
    Required for speech_recognition
    """
    output_path = f"temp_{uuid.uuid4().hex}.wav"

    command = [
        "ffmpeg",
        "-y",
        "-i", input_path,
        "-ac", "1",
        "-ar", "16000",
        output_path
    ]

    try:
        subprocess.run(
            command,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )
        return output_path

    except Exception as e:
        print("FFmpeg Conversion Error:", e)
        return None


# -----------------------
# GEMINI TEXT GENERATION
# -----------------------
def ask_gemini(prompt: str):
    try:
        model = genai.GenerativeModel(
            MODEL_NAME,
            generation_config={
                "temperature": 0.4,
                "top_p": 0.9,
                "response_mime_type": "text/plain"
            }
        )

        response = model.generate_content([prompt])
        return response.text.strip()

    except Exception as e:
        print("Gemini Error:", e)
        return "Mujhe is waqt jawab dene mein dikkat ho rahi hai."


# -----------------------
# SPEECH → TEXT (uses WAV)
# -----------------------
def speech_to_text(audio_file: str):
    recognizer = sr.Recognizer()

    # Convert WEBM → WAV
    wav_path = convert_webm_to_wav(audio_file)

    if not wav_path or not os.path.exists(wav_path):
        return "Audio convert nahi ho paya."

    try:
        with sr.AudioFile(wav_path) as source:
            audio = recognizer.record(source)

        # Try Hindi first
        try:
            text = recognizer.recognize_google(audio, language="hi-IN")
            return text
        except:
            pass

        # Fallback English
        return recognizer.recognize_google(audio, language="en-IN")

    except Exception as e:
        print("STT Error:", e)
        return "Sorry, mujhe samajh nahi aaya."

    finally:
        # Clean temp wav file
        try:
            os.remove(wav_path)
        except:
            pass


# # stt_service.py

# import os
# import google.generativeai as genai
# from dotenv import load_dotenv
# import speech_recognition as sr

# # -----------------------
# # LOAD ENV + CONFIGURE AI
# # -----------------------
# load_dotenv()
# API_KEY = os.getenv("GOOGLE_API_KEY")
# MODEL_NAME = "gemini-2.0-flash"

# genai.configure(api_key=API_KEY)


# # -----------------------
# # GEMINI TEXT GENERATION
# # -----------------------
# def ask_gemini(prompt: str):
#     try:
#         model = genai.GenerativeModel(
#             MODEL_NAME,
#             generation_config={
#                 "temperature": 0.4,
#                 "top_p": 0.9,
#                 "response_mime_type": "text/plain"
#             }
#         )

#         response = model.generate_content([prompt])
#         return response.text.strip()

#     except Exception as e:
#         print("Gemini Error:", e)
#         return "Mujhe is waqt jawab dene mein dikkat ho rahi hai."


# # -----------------------
# # SPEECH → TEXT
# # -----------------------
# def speech_to_text(audio_file: str):
#     recognizer = sr.Recognizer()

#     try:
#         with sr.AudioFile(audio_file) as source:
#             audio = recognizer.record(source)

#         # First try Hindi
#         try:
#             return recognizer.recognize_google(audio, language="hi-IN")
#         except:
#             pass

#         # Then try English fallback
#         return recognizer.recognize_google(audio, language="en-IN")

#     except Exception as e:
#         print("STT Error:", e)
#         return "Sorry, mujhe samajh nahi aaya."


# # import os
# # from dotenv import load_dotenv
# # import google.generativeai as genai

# # load_dotenv()
# # API_KEY = os.getenv("GOOGLE_API_KEY")
# # MODEL_NAME = "gemini-2.0-flash"

# # genai.configure(api_key=API_KEY)

# # def ask_gemini(prompt):
# #     model = genai.GenerativeModel(
# #         MODEL_NAME,
# #         generation_config={
# #             "temperature": 0.4,
# #             "top_p": 0.9,
# #             "response_mime_type": "text/plain"
# #         }
# #     )
# #     response = model.generate_content([prompt])
# #     return response.text