
---
# 💈 Barber-Ts

A responsive barbershop web application built with React and TypeScript. The platform allows users to browse services, book appointments online, and communicate efficiently with barbers. It focuses on type safety, clean architecture, scalability, and modern UI/UX design.

---

## 🚀 Features

* 🔐 **User Authentication**

  * Login & Register system
  * Secure session handling

* 📅 **Online Appointment Booking**

  * Schedule appointments in real time
  * Select services, date, and barber
  * Avoid double booking

* 💬 **Barber ↔ Client Communication**

  * Clear appointment details
  * Status updates (pending, confirmed, completed)
  * Optimized interaction flow

* 💇‍♂️ **Service Listings**

  * Display available services
  * Pricing and descriptions

* 🧩 **Reusable Components**

  * Modular structure
  * Scalable frontend architecture

* 📱 **Responsive Design**

  * Mobile-first approach
  * Optimized for all screen sizes

---

## 🧱 Tech Stack

* ⚛️ React
* 🟦 TypeScript
* 🎨 Tailwind CSS / Bootstrap (según estés usando)
* 🌐 Axios (API communication)
* 🔐 JWT Authentication
* ⚡ Vite (for fast development)

---

## 📂 Project Structure

```
src/
│── components/     # Reusable UI components
│── pages/          # Main views (Home, Login, Register, Booking)
│── services/       # API calls
│── hooks/          # Custom hooks
│── types/          # TypeScript interfaces
│── context/        # Global state (Auth, etc.)
│── assets/         # Images and static files
│── App.tsx
│── main.tsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/barber-ts.git
cd barber-ts
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run the development server

```bash
npm run dev
```

👉 The app will be available at:

```bash
http://localhost:5173
```

---

### 4️⃣ Build for production

```bash
npm run build
```

---

### 5️⃣ Preview production build

```bash
npm run preview
```

---

## 🌍 Deployment

You can deploy this project easily using:

* ▲ **Vercel**

### Example (Vercel):

```bash
npm install -g vercel
vercel
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=https://your-api-url.com
```

---

## 📊 Future Improvements

* 🔔 Real-time notifications (WebSockets / SignalR)
* 💳 Online payments integration
* 📅 Calendar view for barbers
* ⭐ Rating & review system
* 🧠 AI-based schedule optimization

---

## 🎯 Project Purpose

This project was developed as part of a practical assignment to simulate a real-world barbershop system, focusing on:

* Clean frontend architecture
* Scalable design patterns
* Real-life business logic (appointments, services, users)

---

## 👨‍💻 Author

**Abdias Ismael Feliz Segura**
Software Developer | .NET & React

---

## 📜 License

This project is for educational purposes.

---

---



