# BackendExpress - Express Server

## 📂 Project Structure

```
backendExpress/
├── index.ts       # Main Express server file
├── package.json   # npm configuration and dependencies
├── tsconfig.json  # TypeScript configuration
├── bun.lock       # Bun lock file
├── README.md      # Documentation for Express backend
```

---

## 🚀 Running the Server

### 🟢 Setup and Installation

Make sure you have **Bun** installed. If not, install it first:

```bash
npm install -g bun
```

Then, navigate to the `backendExpress` directory and install dependencies:

```bash
cd backendExpress
bun install  # Install dependencies
```

### 🏃 Start the Server

```bash
bun run dev  # Start the Express server in development mode
```

---

## 🔗 API Endpoints

| Route    | Method | Description              |
| -------- | ------ | ------------------------ |
| `/hello` | GET    | Returns a simple message |

---

## 🛠 Requirements

- **Node.js** + **Bun**
- **Express**
- **TypeScript**

📌 **This Express server acts as a full-stack server, handling API logic and serving responses to the stateless frontend.**

🎉 **Happy coding with Express and HTMX!**
