# \Prerna\askDidi\didi-backend\routes\stt_chat_routes.py

from fastapi import APIRouter, UploadFile, File, Form
from pydantic import BaseModel
from services.chat_service import process_chat
from services.tts_service import text_to_speech
# Assuming you have an STT service (e.g., using Google Speech Recognition, or a placeholder)
# For simplicity, we'll use a mock STT. In a real application, you'd integrate a library here.

router = APIRouter()

# --- Placeholder/Mock STT Function ---
async def speech_to_text_mock(audio_file):
    """
    In a real app, this would use an external STT API 
    (e.g., Google Speech-to-Text) to transcribe the audio file.
    """
    # Read the file content (if you needed to process it)
    # content = await audio_file.read() 
    # For now, return a fixed transcript based on expected use case
    return "सरकारी योजनाओं के बारे में बताएं" 

@router.post("/speech_ask") # 👈 CRITICAL: Must be /speech_ask
async def speech_ask(
    user_id: str = Form(...),
    audio: UploadFile = File(...)
):
    """
    Handles audio upload, performs STT, processes chat, and returns TTS audio URL.
    """
    
    # 1. Speech-to-Text (STT)
    # The actual implementation would use an STT library like 'speech_recognition'
    # or a cloud API (Google, Amazon, etc.)
    transcript = await speech_to_text_mock(audio)
    
    # 2. Process Chat (using the existing service)
    # This calls Gemini, gets the response, and saves history.
    answer = process_chat(user_id, transcript)

    # 3. Text-to-Speech (TTS)
    # The language detection is inside text_to_speech
    audio_file_path = text_to_speech(answer) 

    # Extract filename and build URL
    filename = audio_file_path.split("\\")[-1].split("/")[-1]
    # The host name '127.0.0.1:8000' must match your FastAPI server.
    file_url = f"http://127.0.0.1:8000/tts/{filename}"

    return {
        "transcript": transcript,
        "answer": answer,
        "audio_url": file_url
    }