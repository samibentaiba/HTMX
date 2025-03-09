# HTMX Project

## 📂 Project Structure

```
HTMX/
├── backendExpress/   # Express Server
│   ├── index.ts       # Main server file
│   ├── package.json   # npm configuration and dependencies
│   ├── tsconfig.json  # TypeScript configuration
│   ├── bun.lock       # Bun lock file
│   ├── README.md      # Express documentation
│
├── backendFlask/      # Flask Server
│   ├── app.py         # Main server file
│   ├── venv/          # Python virtual environment
│
└── frontend/          # Stateless Frontend Server
    ├── index.html     # Main page
    ├── styles.css     # Project styles
```

---

## 🚀 Running the Project

### 🟢 Running Express Server (Node.js + Bun)

```bash
cd backendExpress
bun install  # Install dependencies
bun run dev  # Start the server
```

### 🔵 Running Flask Server (Python)

```bash
cd backendFlask
source venv/bin/activate  # Activate virtual environment (Linux/macOS)
# or
venv\Scripts\activate  # Activate virtual environment (Windows)

pip install -r requirements.txt  # Install required packages
python app.py  # Start the server
```

### 🎨 Running the Frontend

You can simply open `frontend/index.html` in a browser or start a simple local server:

```bash
cd frontend
python -m http.server 8000  # Start a local server on port 8000
```

---

## 🔗 API Routes

| Route       | Description |
|-------------|-----------------------------|
| `/hello`    | Simple response from the server |

---

### 🛠 Requirements
- **Node.js** + **Bun** for Express
- **Python 3.12** + Flask
- **Modern browser** with HTMX support

📌 **The frontend acts as a stateless server, while the backend (Express & Flask) functions as the full-stack server, handling both logic and data processing.**

🎉 **Enjoy building applications with HTMX, Express, and Flask!**

