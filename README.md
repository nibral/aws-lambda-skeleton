# aws-lambda-skeleton
Template repository for develop codes for AWS Lambda(Node.js).

usage
---

1. Save authentication infomation to ```~/.aws/credencials```([See SDK documents](https://aws.amazon.com/jp/sdk-for-node-js/))
1. Write your code at ```exports.handler``` in ```app.js```.
1. Run ```node test.js``` to execute code at local.
1. At deploy, upload zip file which contain app.js and node_modules(if use any npm packages except aws-sdk).
