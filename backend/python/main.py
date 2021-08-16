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
    json_data_addOGPimage = []
    #print(json_data)
    for data in json_data:
        print(data['public_url'])
        try:
            url = data['public_url']
            html_page = urlopen(url)
            soup = BeautifulSoup(html_page, 'html.parser')
            og_description = soup.find('meta', attrs={'property': 'og:description', 'content': True})
            og_img = soup.find('meta', attrs={'property': 'og:image', 'content': True})
            if og_img is not None:
                data['ogp_image_url'] = og_img['content']
                data['ogp_description'] = og_description['content']
                print(og_description['content'])
                print(og_img['content'])
            else:
                print('!!not found og:image tag!!')
                data['ogp_image_url'] = 'not_found'
                data['ogp_description'] = 'not_found'
        except:
            print('!!not found og:image tag!!')
            data['ogp_image_url'] = 'not_found'
            data['ogp_description'] = 'not_found'
            pass
        print(data)
        json_data_addOGPimage.append(data)
        
    return jsonify(json_data_addOGPimage)

if __name__ == "__main__":
    app.run()