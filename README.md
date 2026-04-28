🧠 MindCare AI — Mental Health Assistant

An AI-powered mental wellness companion built with Hugging Face Transformers

<p align="center"> <img src="assets/banner.png" alt="MindCare AI Banner" width="800"/> </p> <p align="center"> <b>Private, empathetic, and intelligent mental health support — available anytime.</b> </p> <p align="center"> <img src="https://img.shields.io/badge/Status-Active-blue?style=flat-square"/> <img src="https://img.shields.io/badge/Backend-FastAPI-green?style=flat-square"/> <img src="https://img.shields.io/badge/AI-HuggingFace-yellow?style=flat-square"/> <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=flat-square"/> </p>
🚀 Overview

MindCare AI is an AI-driven mental health assistant designed to provide:

Emotional support through empathetic conversations
Mood tracking and journaling insights
Coping strategies based on CBT techniques
Safe, private, and accessible mental wellness guidance

Built using Hugging Face Transformers, the system leverages state-of-the-art NLP models to simulate supportive, human-like dialogue.

🌟 Key Features
💬 Conversational AI Support
Empathetic chat powered by transformer models
Context-aware responses
Multi-turn conversation memory
😊 Mood Detection & Sentiment Analysis
Detects emotional tone from user input
Tracks mood over time
Visual insights (weekly/monthly trends)
🧘 Coping Strategies & Guidance
CBT-inspired suggestions
Breathing exercises and grounding techniques
Personalized recommendations
📓 Journaling Assistant
Daily mental health journaling prompts
AI-generated reflections
Progress tracking
🔐 Privacy & Safety First
No sensitive data storage (optional local mode)
Encrypted communication
Crisis detection with escalation suggestions
🏗️ Architecture
        ┌──────────────────────────────┐
        │          Frontend            │
        │   (React / Next.js UI)       │
        └──────────────┬───────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │        Backend API           │
        │        (FastAPI)             │
        └──────────────┬───────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │   AI Layer (Hugging Face)    │
        │ Transformers / Pipelines     │
        └──────────────┬───────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │ Storage (Optional)           │
        │ SQLite / Postgres           │
        └──────────────────────────────┘
🤖 Models Used

You can plug in different models depending on your needs:

Conversational: facebook/blenderbot-400M-distill
Sentiment Analysis: distilbert-base-uncased-finetuned-sst-2-english
Emotion Detection: j-hartmann/emotion-english-distilroberta-base

All models are available via the **Hugging Face Hub.

⚙️ Installation
1. Clone the repo
git clone https://github.com/yourusername/mindcare-ai.git
cd mindcare-ai
2. Create virtual environment
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
3. Install dependencies
pip install -r requirements.txt
4. Run the backend
uvicorn app.main:app --reload
💻 Example Usage
from transformers import pipeline

chatbot = pipeline("conversational", model="facebook/blenderbot-400M-distill")

response = chatbot("I feel anxious about my future.")
print(response)
🧪 API Endpoints
Endpoint	Method	Description
/chat	POST	Chat with assistant
/analyze	POST	Sentiment & emotion analysis
/journal	POST	Save journal entry
/insights	GET	Mood analytics
