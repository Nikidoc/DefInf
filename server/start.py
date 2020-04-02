import os
import time
from bottle import Bottle, response, request, abort 
from werkzeug.utils import secure_filename   

UPLOAD_DIRECTORY = "C:/Users/Кот/IdeaProjects/DefInf/server/base/"

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

app = Bottle(__name__)


@app.hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'

    
@app.route('/crypt', method='POST')
def crypt():
    text = request.forms["message"] #текст для зашифрования
    
    f = request.files['file']
    file_path = UPLOAD_DIRECTORY + secure_filename(f.filename)#путь для сохранения фотографии
    f.save(file_path)
    
    #result = result_from_NN(file_path) #Васина функция, которая выдает статус, ключ и сообщение(в случае ошибки)
    if (result["status"] != 0):
        return {"status" : result["status"],
                "err_message" : result["err_message"]}
    
    key = result["key"]
    
    #ctext = result_from_encryptor(text, key) #Функция Иен, которая шифрует текст
        
    return {"status" : "0",
            "message" : ctext}


@app.route('/decrypt', method='POST')
def decrypt():
    text = request.forms["message"] #текст для расшифрования
    
    f = request.files['file']
    file_path = UPLOAD_DIRECTORY + secure_filename(f.filename)#путь для сохранения фотографии
    f.save(file_path)
    
    #result = result_from_NN(file_path) #Васина функция, которая выдает статус, ключ и сообщение(в случае ошибки)
    if (result["status"] != 0):
        return {"status" : result["status"],
                "err_message" : result["err_message"]}
    
    key = result["key"]
    
    #ctext = result_from_decryptor(text, key) #Функция Иен, которая расшифровывает текст
        
    return {"status" : "0",
            "message" : ctext}


@app.route('/reg', method='POST')
def reg():
    f = request.files['file']
    file_path = UPLOAD_DIRECTORY + secure_filename(f.filename)#путь для сохранения фотографии
    f.save(file_path)
    
    #result = create_key_and_save_it_with_photo(filePath) # Функция генерирующая ключ и сохраняющая его и первую фотографию в базе
    
    if (result["status"] != 0):
        return {"status" : result["status"],
                "err_message" : result["err_message"]}
    
    return {"status" : "0",
            "message" : ctext}
    
@app.route('/test')
def test():
    time.sleep(3)        
    return {"status" : 0,
            "message" : "good"}


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5050)