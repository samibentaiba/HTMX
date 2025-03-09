import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// دعم `__dirname` في TypeScript + ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// جعل Express يخدم ملفات الـ Frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// صفحة البداية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

// API Endpoint لاستقبال الطلبات من HTMX
app.get("/hello", (req, res) => {
  res.send("<p>مرحبًا بك في HTMX! 🚀</p>");
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
