import os
from flask import *
from werkzeug.utils import secure_filename
from flask import send_from_directory
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)
CORS(app, resources=r'/*')
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif','mp3','flac','wav','mpeg'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# @app.route('/')
# def hello_world():
#     return 'Hello World!'
history_list = []

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],filename)


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        print(file)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            path = '/uploads/'+filename
            return_data = {}
            return_data['code'] = 200
            return_data['path'] = path
            history_list.append(path)
            return json.dumps(return_data)
    return json.dumps({'code':500})

@app.route('/history')
def history():
    return_data={}
    return_data['code']=200
    return_data['data']=history_list
    return json.dumps(return_data)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return Response("<h1>Flask</h1><p>You visited: /%s</p>" % (path), mimetype="text/html")

if __name__ == '__main__':
    app.run()