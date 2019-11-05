from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/user')
def user():
    return render_template('user.html')

@app.route('/classes')
def classes():
    return render_template('classes.html')

@app.route('/routine')
def routine():
    return render_template('routine.html')

@app.route('/attendance')
def attendance():
    return render_template('attendance.html')

@app.route('/logout')
def logout():
    return render_template('attendance.html')
    

if __name__ == '__main__':
    app.run(port=8000, debug=True)