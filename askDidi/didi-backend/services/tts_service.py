# tts_service.py

from gtts import gTTS
import uuid
import os
import re

# -----------------------
# CLEAN TEXT BEFORE TTS
# -----------------------
def clean_text(text):
    if not text or not isinstance(text, str):
        return "Mujhe samajh nahi aaya."

    text = re.sub(r"[*_#>\-]", " ", text)   # remove markdown symbols
    text = re.sub(r"\s+", " ", text)        # compress spaces
    return text.strip()


# -----------------------
# TEXT → SPEECH
# AUTO DETECT LANG
# -----------------------
def text_to_speech(text, lang="hi"):
    text = clean_text(text)

    # English letters present & NO Hindi characters → choose English
    if any(c.isalpha() for c in text) and not any("\u0900" <= c <= "\u097F" for c in text):
        lang = "en"
    else:
        lang = "hi"

    # Create file
    filename = f"tts_{uuid.uuid4().hex}.mp3"
    filepath = os.path.join("tts_output", filename)

    os.makedirs("tts_output", exist_ok=True)

    try:
        tts = gTTS(text=text, lang=lang)
        tts.save(filepath)
        return filepath

    except Exception as e:
        print("TTS Error:", e)

        # fallback audio
        fallback = os.path.join("tts_output", "error_fallback.mp3")
        gTTS(text="Sorry, voice generate nahi ho paya.", lang="hi").save(fallback)
        return fallback


# # tts_service.py

# from gtts import gTTS
# import uuid
# import os
# import re

# # -----------------------
# # CLEAN TEXT FOR TTS
# # -----------------------
# def clean_text(text):
#     if not text or not isinstance(text, str):
#         return "Mujhe samajh nahi aaya."

#     # Remove markdown or weird symbols
#     text = re.sub(r"[*_#>\-]", " ", text)
#     text = re.sub(r"\s+", " ", text)
#     return text.strip()


# # -----------------------
# # TEXT → SPEECH (Hindi / English auto-detect)
# # -----------------------
# def text_to_speech(text, lang="hi"):
#     text = clean_text(text)

#     # Auto language detect:
#     # English letters present AND NO Hindi letters → treat as English
#     if any(c.isalpha() for c in text) and not any("\u0900" <= c <= "\u097F" for c in text):
#         lang = "en"
#     else:
#         lang = "hi"

#     # Prepare file path
#     filename = f"tts_{uuid.uuid4().hex}.mp3"
#     filepath = os.path.join("tts_output", filename)
#     os.makedirs("tts_output", exist_ok=True)

#     try:
#         tts = gTTS(text=text, lang=lang)
#         tts.save(filepath)
#         return filepath

#     except Exception as e:
#         print("TTS Error:", e)
#         # fallback small audio
#         fallback_path = os.path.join("tts_output", "error_fallback.mp3")
#         gTTS(text="Sorry, voice output generate nahi ho paya.", lang="hi").save(fallback_path)
#         return fallback_path


# # from gtts import gTTS
# # import uuid
# # import os
# # import re

# # def clean_text(text):
# #     # Remove markdown bullets, stars, extra formatting
# #     text = re.sub(r"[*_#>-]", " ", text)   # remove markdown symbols
# #     text = re.sub(r"\s+", " ", text)       # fix double spaces
# #     return text.strip()

# # def text_to_speech(text, lang="hi"):
# #     text = clean_text(text)   # ← CLEAN TEXT FIRST

# #     # Detect English automatically
# #     if any(c.isalpha() for c in text) and not any("\u0900" <= c <= "\u097F" for c in text):
# #         lang = "en"

# #     filename = f"tts_{uuid.uuid4().hex}.mp3"
# #     filepath = os.path.join("tts_output", filename)
# #     print(filepath)
# #     os.makedirs("tts_output", exist_ok=True)

# #     tts = gTTS(text=text, lang=lang)
# #     tts.save(filepath)

# #     return filepath