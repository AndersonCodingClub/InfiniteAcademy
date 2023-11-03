from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/programming')
def programming():
    return render_template('programming.html')

if __name__ == '__main__':
    app.run(debug=True)
    
#http://10.9.156.176:5000