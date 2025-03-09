from flask import Flask, send_file, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return send_file("../frontend/index.html")  # تحميل HTML من خارج templates

@app.route("/hello")
def hello():
    return "<p>مرحبًا بك في HTMX مع Flask! 🚀</p>"

@app.route("/static/<path:filename>")
def static_files(filename):
    return send_from_directory("frontend", filename)  # جلب الملفات الثابتة مثل CSS

if __name__ == "__main__":
    app.run(debug=True, port=5000)
