import fitz
import google.generativeai as genai
import os
from dotenv import load_dotenv
import json
import re

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("models/gemini-2.0-flash")

def clean_response_text(text):
    match = re.search(r"```json\s*(\{.*?\})\s*```", text, re.DOTALL)
    if match:
        return match.group(1)
    else:
        return text.strip()

def extract_text_from_pdf(file_bytes):
    doc = fitz.open(stream=file_bytes, filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text
def extract_content(file_bytes):
    text = extract_text_from_pdf(file_bytes)

    prompt = f"""
    You are an AI assistant. Extract and format the resume below into **valid JSON only**, with this exact structure, and do NOT include any text outside the JSON or markdown fences.
    {{
        "name": "",
        "title": "",
        "summary": "",
        "skills": [],
        "projects":[
        {{
        "Project Title":"",
        "Project Description":"",
        "Project Link":""
        }}
        ],
        "experience": [
            {{
                "company": "",
                "role": "",
                "duration": "",
                "details": ""
            }}
        ],
        "education": [
            {{
                "institution": "",
                "degree": "",
                "year": ""
            }}
        ]
    }}

    Resume:
    \"\"\"{text}\"\"\"
    """

    response = model.generate_content(prompt)
    return json.loads(clean_response_text(response.text))
