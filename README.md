# React + Ruby on Rails API

## アプリ URL

https://dazzling-swirles-8413ba.netlify.app/

## 使用インフラサービス

フロントエンド：Netlify

バックエンド：heroku

## React+Rails で Netlify からホスティングする時の注意

Base Directory: フロントエンド側のディレクトリ

Build command: CI=npm run build

※Netlify 側の仕様変更で npm run build だけでは通らないケースが出ているようです。

(参考)
https://community.netlify.com/t/netlify-not-building-command-failed-with-exit-code-1-npm-run-build/16999

Public directory：フロントエンド側のディレクトリ/build
