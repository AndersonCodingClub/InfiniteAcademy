from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/programming')
def programming():
    return render_template('programming.html')

@app.route('/investing')
def investing():
    return render_template('investing.html')

@app.route('/math')
def math():
    return render_template('math.html')

if __name__ == '__main__':
    app.run(debug=True)