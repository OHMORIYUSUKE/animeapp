from flask import Flask, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
from urllib.request import urlopen
import requests
import json

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api/v1/<year>/<cool>", methods=['GET'])
def index(year,cool):
    # GET
    # データがJSONであること指定
    headers = {"content-type": "application/json"}
    # JSONを取得
    response=requests.get('https://api.moemoe.tokyo/anime/v1/master/' + year + '/' + cool, headers=headers)
    # 取得したデータからJSONを取得
    json_data = response.json()
    # 最後に返すJSON
    json_data_addOGPimage = []
    #print(json_data)
    for data in json_data:
        # 取得したJSONにあるサイトのリンク
        print(data['public_url'])
        try:
            url = data['public_url']
            # サイトのリンクからOGP画像、説明を取得
            html_page = urlopen(url)
            soup = BeautifulSoup(html_page, 'html.parser')
            # ogpの画像のurlを取得する
            og_description = soup.find('meta', attrs={'property': 'og:description', 'content': True})
            # ogpの説明を取得する
            og_img = soup.find('meta', attrs={'property': 'og:image', 'content': True})
            if og_img is not None:
                r = requests.get(og_img['content'])
                print(r.status_code)
                if(r.status_code != 404):
                    # dataにogpの画像のurlを追加
                    data['ogp_image_url'] = og_img['content']
                    # dataにogpの説明を追加
                    data['ogp_description'] = og_description['content']
                    print(og_description['content'])
                    print(og_img['content'])
                else:
                    # 404でogpを取得できなかった時
                    print('!!not found og:image tag!!')
                    data['ogp_image_url'] = 'not_found'
                    data['ogp_description'] = 'not_found'
            else:
                # ogpを取得できなかった時
                print('!!not found og:image tag!!')
                data['ogp_image_url'] = 'not_found'
                data['ogp_description'] = 'not_found'
        except:
            # ogpを取得できなかった時
            print('!!not found og:image tag!!')
            data['ogp_image_url'] = 'not_found'
            data['ogp_description'] = 'not_found'
            pass
        print(data)
        # ogpのデータをそれぞれに追加したdataを配列にする
        json_data_addOGPimage.append(data)
    # 生成したJSON(list)を返す
    return jsonify(json_data_addOGPimage)

if __name__ == "__main__":
    app.run()