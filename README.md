# 💔 Anajali — Ex-GF AI Chatbot

> "Talk to your past... maybe get closure."

Ajnajai is a locally run, emotionally-powered chatbot that simulates conversations with your **ex-girlfriend** based on **WhatsApp chat data** you fed into it. It uses **Gemini (Google's LLM)** via API to generate contextually aware, realistic, and sometimes dramatic replies — all in the personality of your ex.

---

## 🧠 Core Features

- 🤖 Chat with an **imaginary character** named *Ajnajai*, modeled after a real ex.
- 💬 Trained on **actual WhatsApp chat text** (extracted manually).
- 🌐 Built using **HTML**, **CSS**, and **Vanilla JavaScript**.
- 🔑 Uses **Gemini Pro API** (Google AI) for dynamic replies.
- 🎭 Simulates emotion, memory, and typing effect.
- 💻 Lightweight frontend — no backend required (runs in browser).

---

## 🛠️ Tech Stack

| Feature              | Tech Used                     |
|----------------------|-------------------------------|
| Frontend             | HTML, CSS, JavaScript         |
| AI Integration       | Gemini LLM API (Google)       |
| Styling              | Custom CSS                    |
| Data Source          | WhatsApp Chat Export (TXT)    |
| Hosting              | Localhost / Static Server     |

---

## 📂 Folder Structure

```bash
ex-gf-ai-bot/
├── index.html
├── style.css
├── script.js
├── prompts/
│   └── your-whatsapp-chat.txt
├── assets/
│   └── logo.png
├── .env
└── README.md
🔑 Setup
Clone the Repository

bash
Copy
Edit
git clone https://github.com/7tanmay7/ex-gf-ai-bot.git
cd ex-gf-ai-bot
Install Live Server (optional for running)

You can use VS Code Live Server, or install serve:

bash
Copy
Edit
npm install -g serve
Create .env File

Make a .env file and add your Gemini API Key:

env
Copy
Edit
GEMINI_API_KEY=your_gemini_api_key_here
🔐 Never expose your API key in public repos.

Run Locally

If using Live Server (VS Code extension), right-click index.html → "Open with Live Server"

Or via terminal:

bash
Copy
Edit
serve .
Visit: http://localhost:3000

🧾 How It Works
You extract and clean your WhatsApp .txt chat export.

The chat history is fed into the prompt system (script.js).

Gemini API is queried with each user message and past context.

Responses are simulated in a chat interface as if she is talking to you.

📸 UI Preview
(Add a screenshot of your chatbot UI here, optional)

🚧 TODO (Optional Improvements)
Add voice typing via Web Speech API

Use a vector DB for more contextual memory

Host on Vercel or GitHub Pages

Add mood detection

🧡 Disclaimer
This bot is built for educational and emotional closure purposes only. It’s not intended to replace real relationships or serve as psychological support.

🙋🏻‍♂️ Author
Tanmay Raj
GitHub | LinkedIn

📜 License
MIT License. Use freely but please don't deploy this with real people’s data without consent.

yaml
Copy
Edit

---

Let me know if you want this README exported as a file, or if you want to include a
