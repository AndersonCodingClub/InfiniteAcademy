from flask import Flask, render_template
from tree import *


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

@app.route('/tree')
def tree():
    node = construct_new_tree(category='programming')
    print_tree(node)
    return 'Hello'

if __name__ == '__main__':
    app.run(debug=True)
    
#http://10.9.149.244:5000