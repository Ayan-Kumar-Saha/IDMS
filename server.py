from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)


students = ['Sayan Ghosh', 'Anirban Ghar','Tapashree Seal' , 'Nivedita Malakar', 'Sudip Samanta']
subjects = ['Mobile Computing', 'Software Engineering', 'Theory of Computation', 'Digital Electronics']
colors = ['grad1', 'grad2', 'grad3', 'grad4']
attended = [45, 34, 40, 60, 55]
held = [60, 60, 60, 60, 60]
percentage = [75, 56, 66, 100, 91]

@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('log-sign.html')

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
    return redirect('/login')

@app.route('/temp')
def temp():
    return render_template('attendanceT.html', students = students, subjects = subjects, colors = colors, attended = attended, held = held, percentage = percentage)
    

if __name__ == '__main__':
    app.run(port=8000,debug=True)