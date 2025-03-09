# HTMX Frontend

## 📂 Frontend Structure

```
frontend/
├── index.html     # Main page
├── styles.css     # Project styles
```

---

## 🚀 Running the Frontend

The frontend is a **stateless server**, meaning it does not handle any logic or store data. Instead, it relies on backend servers for processing and responses. To use it, simply open `index.html` in a browser.

Alternatively, you can start a simple local server:

```bash
cd frontend
python -m http.server 8000  # Start a local server on port 8000
```

This will allow you to access the frontend at `http://localhost:8000/`.

---

## 🛠 Requirements

- **Modern browser** with HTMX support
- **Backend servers** (Express & Flask) for handling data and processing requests

📌 **The frontend is purely responsible for rendering and interacting with the user. All data handling is delegated to the backend.**

🎉 **Enjoy building applications with HTMX!**
