# **Rule-Based Chatbot (MERN Stack)**

A simple **rule-based educational chatbot** built using the **MERN stack**.
The chatbot answers predefined questions related to **math, science, physics, biology, CS, and general study concepts**.
It stores **user messages** and **bot responses** in a MongoDB database.

---

## 🚀 **Features**

* 📌 Rule-based responses (no AI model needed)
* 🎓 Answers educational questions
* 💬 Clean chat UI made with React + Tailwind
* 🗂 Stores chat history in MongoDB
* 🌐 Backend built with Node.js + Express
* 🎯 Easy to customize and extend

---

## 🛠 **Tech Stack**

### **Frontend**

* React.js
* Vite
* TailwindCSS

### **Backend**

* Node.js
* Express.js
* MongoDB (Mongoose ORM)

---

## 📂 **Project Structure**

```
Chatbot/
│
├── backend/
│   ├── controllers/
│   │   └── chatbot.message.js
│   ├── data/
│   │   └── botResponses.js
│   ├── models/
│   ├── index.js
│
├── frontend/
│   ├── src/
│   │   └── components/Bot.jsx
│   └── App.jsx
│
└── README.md
```

---

## ⚙️ **How It Works**

1. User types a message
2. Message is saved to the database
3. Input is normalized
4. Bot checks if the text exists in `botResponses.js`
5. Matching response is returned
6. Bot reply is saved in database

---

## ▶️ **Running the Project Locally**

### **Backend**

```bash
cd backend
npm install
node index.js
```

### **Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 **Future Improvements**

* Add NLP or LLM for smarter replies
* Add authentication
* Add chat history UI
* Allow admin to add new bot responses dynamically

---

## 📜 **License**

This project is created for educational purposes.

---

I
