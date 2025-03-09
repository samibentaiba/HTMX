# Backend Flask

## 📂 Project Structure

```
backendFlask/
├── app.py         # Main Flask server file
├── requirements.txt  # Required dependencies
├── venv/         # Python virtual environment
└── README.md     # Documentation
```

---

## 🚀 Running the Flask Server

### 🔹 Setup the Virtual Environment

Before running the Flask server, you need to set up a virtual environment and install dependencies:

```bash
cd backendFlask
python -m venv venv  # Create a virtual environment
```

Activate the virtual environment:

- **Linux/macOS:**

  ```bash
  source venv/bin/activate
  ```

- **Windows:**

  ```bash
  venv\Scripts\activate
  ```

### 🔹 Install Dependencies

```bash
pip install -r requirements.txt
```

### 🔹 Run the Flask Server

```bash
python app.py
```

By default, the server runs on `http://127.0.0.1:5000/`. You can modify the port inside `app.py` if needed.

---

## 🔗 API Routes

| Route    | Description                     |
| -------- | ------------------------------- |
| `/hello` | Simple response from the server |

---

## 🛠 Requirements

- **Python 3.12+**
- **Flask** (Installed via `requirements.txt`)

📌 **This backend acts as a full-stack server, handling both logic and data processing for the frontend.**

🎉 **Enjoy building with Flask!**
