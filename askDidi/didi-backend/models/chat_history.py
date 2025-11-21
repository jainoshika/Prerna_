from pydantic import BaseModel

# This is the Pydantic model needed for /ask and /reset_chat routes
class ChatRequest(BaseModel):
    user_id: str
    message: str = None # Optional for /reset_chat, required for /ask

class UserProfile(BaseModel):
    user_id: str
    name: str = None
    preferred_language: str = "Hindi"
    education: str = None
    skills: list = []
    interests: list = []
    location: str = None