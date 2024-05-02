from flask import Flask, render_template

#web app to host bouncing ball animation
app = Flask(__name__)

#create route wehere animation can be located
@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
