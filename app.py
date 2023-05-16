import openai
from flask import Flask, render_template, request
from dotenv import dotenv_values

config = dotenv_values(".env")
openai.api_key = config["OPENAI_API_KEY"]

app = Flask(__name__, template_folder="templates")

# @app.route("/palette", methods=["POST"])
# def prompt_to_palette():
#     # OpenAI completion call:
#     # Return list of colors:


@app.route("/")
def index():
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Give me a funny word: ",
        max_tokens=200,
    )
    return response["choices"][0]["text"]
    # return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
