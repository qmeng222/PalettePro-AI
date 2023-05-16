from flask import Flask, render_template, request

app = Flask(__name__, template_folder="templates")


@app.route("/guinea-pig")
def gp():
    return "Wheek! Wheek!🥬"


@app.route("/")
def index():
    return "Hello from Flask👋"


if __name__ == "__main__":
    app.run(debug=True)
