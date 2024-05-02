from flask import Flask, render_template

#web app to host bouncing ball animation
app = Flask(__name__)

#create route wehere animation can be located
@app.route("/")
def home():
    return render_template("index.html")

#only run app if main file (bouncing_ball_app) is executed 
if __name__ == "__main__":
    #run in debug mode to observe changes without having to restart connection
    app.run(debug=True)
