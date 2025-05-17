# MernChatAPP

# 💬 Fullstack Chat App

A modern, responsive chat application built with:

- ⚛️ React + Tailwind CSS + Vite (Frontend)
- 🟢 Node.js + Express + MongoDB + Socket.io (Backend)
---
## 🔧 Project Structure

frontend/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── eslint.config.js
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
├── public/
│   ├── avatar.png
│   ├── screenshot-for-readme.png
│   └── vite.svg
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── AuthImagePattern.jsx
    │   ├── ChatContainer.jsx
    │   ├── ChatHeader.jsx
    │   ├── MessageInput.jsx
    │   ├── Navbar.jsx
    │   ├── NoChatSelected.jsx
    │   ├── Sidebar.jsx
    │   └── skeletons/
    │       ├── MessageSkeleton.jsx
    │       └── SidebarSkeleton.jsx
    ├── constants/
    │   └── index.js
    ├── lib/
    │   ├── axios.js
    │   └── utils.js
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── LoginPage.jsx
    │   ├── ProfilePage.jsx
    │   ├── SettingsPage.jsx
    │   └── SignUpPage.jsx
    └── store/
        ├── useAuthStore.js
        ├── useChatStore.js
        └── useThemeStore.js

backend/
├── package.json
├── package-lock.json
└── src/
    ├── index.js
    ├── controllers/
    │   ├── auth.controller.js
    │   └── message.controller.js
    ├── lib/
    │   ├── cloudinary.js
    │   ├── db.js
    │   ├── socket.js
    │   └── utils.js
    ├── middleware/
    │   └── auth.middleware.js
    ├── models/
    │   ├── message.model.js
    │   └── user.model.js
    ├── routes/
    │   ├── auth.route.js
    │   └── message.route.js
    └── seeds/
        └── user.seed.js

