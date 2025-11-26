import os
from dotenv import load_dotenv
from google import genai
from google.genai.types import (
    GenerateContentConfig,
    GoogleSearch,
    HttpOptions,
    Tool,
)

load_dotenv()

# Load ADC service account key
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

client = genai.Client(
    vertexai={
        "project": os.getenv("GOOGLE_CLOUD_PROJECT"),
        "location": os.getenv("GOOGLE_CLOUD_LOCATION"),
    },
    http_options=HttpOptions(api_version="v1")
)

def ask_grounded_gemini(query: str):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"""
आपका काम है कि Google Search के नतीजों को बहुत ही छोटे, सरल और 
3–4 लाइन के जवाब में समझाना है। लम्बा पैराग्राफ नहीं लिखना है।

प्रश्न: {query}
""",
        config=GenerateContentConfig(
            tools=[Tool(google_search=GoogleSearch())],
            max_output_tokens=200  # ~30 sec answer
        ),
    )
    return response.text

