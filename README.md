# aws-lambda-skelton
Template repository for develop codes for AWS Lambda(Node.js).

usage
---

1. ```~/.aws/credencials```に認証情報を保存する([公式ドキュメント参照](https://aws.amazon.com/jp/sdk-for-node-js/))
1. ```app.js```の```exports.handler```にコードを書く
1. ```node test.js```するとローカルで動く
1. デブロイするときは```app.js```と```node_modules```(aws-sdk以外のパッケージがある場合のみ)をアップロード
