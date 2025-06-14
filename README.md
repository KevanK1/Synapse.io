# 🧠 Synapse

**All your conversations. One dashboard. Zero distractions.**

[🔗 Frontend Prototype](https://incandescent-piroshki-e5ba14.netlify.app/)

---

## 🌟 Overview

**Synapse** is a powerful productivity platform that connects all your communication platforms — like Gmail, LinkedIn, Reddit, X (Twitter), blogs, and more — into a unified, distraction-free dashboard.

Whether you're working solo or in a team, Synapse helps you stay focused by organizing updates into **custom groups**, allowing real-time tracking, simplified messaging, and intelligent prioritization through AI.

---

## 🚀 Core Features

- 🔗 **Multi-Platform Integration**  
  Connect Gmail, Reddit, LinkedIn, X, and more via APIs/OAuth.

- 📁 **Custom Focus Groups**  
  Organize feeds and messages by themes — e.g., "Hackathon Research", "Job Hunt", or "College Work".

- 🧠 **AI + MCP Layer**  
  Use an AI interface to ask questions across all connected apps. The MCP (Model Context Protocol) determines which tools to call and fetches relevant data.

- 🧑‍🤝‍🧑 **Collaborative Mode**  
  Share groups with friends or teammates — follow updates together in real-time.

- 🖼️ **Unified Chat UI**  
  A single chat-style interface to send prompts, view messages/posts from all connected apps, and respond contextually.

- 📱 **Responsive & Sleek Design**  
  Built with modern web tech for desktop and mobile. See the prototype [here](https://incandescent-piroshki-e5ba14.netlify.app/).

---

## 📦 Tech Stack

| Layer            | Technology Used                     |
|------------------|-------------------------------------|
| Frontend         | HTML, Tailwind CSS, GSAP, JavaScript (React in full version) |
| Backend          | Express.js + FastAPI (for AI + integrations) |
| AI Integration   | OpenAI LLM + MCP routing layer      |
| Real-time        | WebSockets (Socket.IO)              |
| Auth             | OAuth 2.0 (Gmail, LinkedIn, etc.)   |
| Deployment       | Netlify (Frontend) / Render/Fly.io (Backend) |

---

## 🧩 How It Works (Simplified Flow)

1. **Connect**: Link your platforms via OAuth.
2. **Group**: Create groups like "College", "Hackathon", or "Internship".
3. **Chat**: Ask anything — “Show me unread emails from recruiters” or “Reddit posts from r/MachineLearning today”.
4. **AI + MCP**: Synapse’s AI intelligently routes the prompt, calls the appropriate APIs, and fetches organized responses.

---

## 🎯 Use Cases

- Students juggling classes, internships, and project updates across apps.
- Professionals who want a single view for emails, DMs, threads, etc.
- Teams working on shared goals and need a collective info board.

---

## 🛠️ Project Status

- ✅ Frontend prototype live [here](https://incandescent-piroshki-e5ba14.netlify.app/)
- 🧠 MCP + AI response routing under development
- 🔗 API integrations (Gmail, Reddit, etc.) in progress

---

## 📬 Contact

Made with ❤️ by [Kevan Tamboli](mailto:kevantamboli@gmail.com)

---

## 📄 License

This project is open source under the [MIT License](LICENSE).
