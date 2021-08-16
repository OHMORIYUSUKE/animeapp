FROM python:3.9.6

# https://qiita.com/kazuyoshikakihara/items/0cf74c11d273b0064c83
# 文字コード
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

# uwsgiでPythonのアプリケーションを配置するディレクトリ
# https://qiita.com/11ohina017/items/da2ae5b039257752e558
COPY ./python /var/www

# 作業ディレクトリ
WORKDIR /var/www/
RUN pip install --upgrade pip

RUN pip install -r requirements.txt

# uwsgiを実行するコマンド
CMD ["uwsgi","--ini","/var/www/uwsgi.ini"]