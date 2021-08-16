from flask import Flask, jsonify
# https://techpr.info/ml/flask-api/
from bs4 import BeautifulSoup
from urllib.request import urlopen
import requests
import json

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.route("/<year>/<cool>", methods=['GET'])
def hello(year,cool):
    # GET
    headers = {"content-type": "application/json"}
    response=requests.get('http://api.moemoe.tokyo/anime/v1/master/'+year+'/'+cool, headers=headers)
    json_data = response.json()
    #print(json_data)
    for data in json_data:
        print(data['public_url'])
        try:
            url = data['public_url']
            html_page = urlopen(url)
            soup = BeautifulSoup(html_page, 'html.parser')
            og_img = soup.find('meta', attrs={'property': 'og:image', 'content': True})
            if og_img is not None:
                print(og_img['content'])
            else:
                print('!!not found og:image tag!!')
        except:
            print('!!not found og:image tag!!')
            pass
        
    return jsonify(json_data)

if __name__ == "__main__":
    app.run()