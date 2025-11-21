from fastapi import APIRouter, UploadFile, File
from models.chat_history import ChatRequest
from services.chat_service import process_chat, reset_history
from services.tts_service import text_to_speech
from services.stt_service import speech_to_text
import uuid
import os

router = APIRouter(prefix="/stt", tags=["STT"])

# ---------------------------------------
# 1️⃣ TEXT CHAT (Ask Didi Text Message)
# ---------------------------------------
@router.post("/ask")
def ask(req: ChatRequest):
    answer = process_chat(req.user_id, req.message)

    # Convert text → speech
    audio_file = text_to_speech(answer)

    # extract filename only
    filename = audio_file.split("\\")[-1].split("/")[-1]
    file_url = f"http://127.0.0.1:8000/tts/{filename}"

    return {
        "answer": answer,
        "audio_url": file_url
    }


# ---------------------------------------
# 2️⃣ RESET CHAT MEMORY
# ---------------------------------------
@router.post("/reset_chat")
def reset(req: ChatRequest):
    reset_history(req.user_id)
    return {"status": "chat reset"}


# ---------------------------------------
# 3️⃣ VOICE → TEXT (REQUIRED for AskDidi.jsx)
# ---------------------------------------
@router.post("/voice")
async def voice_to_text(file: UploadFile = File(...)):
    try:
        # Save uploaded audio locally
        filename = f"rec_{uuid.uuid4().hex}.wav"
        filepath = os.path.join("uploads", filename)
        os.makedirs("uploads", exist_ok=True)

        with open(filepath, "wb") as f:
            f.write(await file.read())

        # Convert Speech → Text
        text = speech_to_text(filepath)

        return {"text": text}

    except Exception as e:
        return {"error": str(e)}
    

# from fastapi import APIRouter
# from models.chat_history import ChatRequest
# from services.chat_service import process_chat, reset_history
# from services.tts_service import text_to_speech 

# router = APIRouter(prefix="/stt", tags=["STT"])

# @router.post("/ask")
# def ask(req: ChatRequest):
#     answer = process_chat(req.user_id, req.message)

#     # Convert text → speech
#     audio_file = text_to_speech(answer)

#     filename = audio_file.split("\\")[-1].split("/")[-1]
#     file_url = f"http://127.0.0.1:8000/tts/{filename}"

#     return {
#         "answer": answer,
#         "audio_url": file_url
#     }

# @router.post("/reset_chat")
# def reset(req: ChatRequest):
#     reset_history(req.user_id)
#     return {"status": "chat reset"}


# from gtts import gTTS
# import uuid
# import os
# import re

# def clean_text(text):
#     # Remove markdown bullets, stars, extra formatting
#     text = re.sub(r"[*_#>-]", " ", text)   # remove markdown symbols
#     text = re.sub(r"\s+", " ", text)       # fix double spaces
#     return text.strip()

# def text_to_speech(text, lang="hi"):
#     text = clean_text(text)   # ← CLEAN TEXT FIRST

#     # Detect English automatically
#     if any(c.isalpha() for c in text) and not any("\u0900" <= c <= "\u097F" for c in text):
#         lang = "en"

#     filename = f"tts_{uuid.uuid4().hex}.mp3"
#     filepath = os.path.join("tts_output", filename)
#     print(filepath)
#     os.makedirs("tts_output", exist_ok=True)

#     tts = gTTS(text=text, lang=lang)
#     tts.save(filepath)

#     return filepath