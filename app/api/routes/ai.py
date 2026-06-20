from fastapi import APIRouter
from google import genai
import os

router = APIRouter()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

@router.post("/ai/roadmap")
def get_roadmap(career: str):
    prompt = f"""
    You are a senior career mentor.

    Create a 30-day roadmap for:
    {career}

    Return in proper format:
    Week 1
    Week 2
    Week 3
    Week 4
    """

    response = client.models.generate_content(
        model = "gemini-2.5-flash",
        contents = prompt
    )

    return {
        "career": career,
        "roadmap": response.text
    }


@router.post("/ai/explain")
def explain(topic: str):
    prompt = f"""
    Explain me this {topic} as you are explaning a 10 year old student.
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    print(response)
    return{
        "topic": topic,
        "explain": response.text
    }

