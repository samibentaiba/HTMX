# HTMX Project

## 📂 Project Overview
This project is structured to demonstrate the integration of **HTMX** with both **Express.js (Node.js)** and **Flask (Python)** as backend servers. The frontend remains stateless and interacts dynamically with both backends.

## 📁 Project Structure
```
HTMX/
├── backendExpress/   # Express Server (Node.js + Bun)
│   ├── index.ts       # Main server file
│   ├── package.json   # npm configuration and dependencies
│   ├── tsconfig.json  # TypeScript configuration
│   ├── bun.lock       # Bun lock file
│   ├── README.md      # Express documentation
│
├── backendFlask/      # Flask Server (Python)
│   ├── app.py         # Main server file
│   ├── venv/          # Python virtual environment
│   ├── requirements.txt  # Dependencies for Flask
│
└── frontend/          # Frontend (Stateless Server)
    ├── index.html     # Main page
    ├── styles.css     # Project styles
```

## 🚀 Running the Project
This project consists of multiple independent parts, each running separately.

### 🟢 Running the Express Server (Node.js + Bun)
The **Express.js** backend is written in TypeScript and uses Bun for execution.
```bash
cd backendExpress
bun install  # Install dependencies
bun run dev  # Start the Express server
```

### 🔵 Running the Flask Server (Python)
The **Flask** backend runs inside a virtual environment.
```bash
cd backendFlask
source venv/bin/activate  # Activate virtual environment (Linux/macOS)
# or
venv\Scripts\activate  # Activate virtual environment (Windows)

pip install -r requirements.txt  # Install required packages
python app.py  # Start the Flask server
```

### 🎨 Running the Frontend
The frontend is a **stateless HTML/HTMX-based interface** that interacts with the backend servers dynamically.

You can open `frontend/index.html` directly in a browser or start a simple HTTP server:
```bash
cd frontend
python -m http.server 8000  # Start a local server on port 8000
```

## 🔀 Branches & Purpose
The project is divided into three active branches:
- **`backendExpress`** - Contains the Express.js implementation.
- **`backendFlask`** - Contains the Flask implementation.
- **`frontend`** - Contains the HTML, CSS, and HTMX files.

The `main` branch serves as the central integration point.

## 🔗 API Routes
Both backend servers expose similar routes for testing:

| Route       | Description |
|-------------|------------|
| `/hello`    | Returns a simple response from the server |

## 📌 Tech Stack Requirements
- **Node.js** + **Bun** for Express.js
- **Python 3.12** + Flask
- **Modern browser** with **HTMX** support

🎉 **This project showcases how HTMX can seamlessly interact with both Express.js and Flask!**

