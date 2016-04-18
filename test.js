'use strict';

// Input data from AWS
var event = {
    Records: [
        {
            awsRegion: 'ap-northeast-1'
        }
    ]
};

// AWS Lambda runtime information
var context = {
    succeed: (result) => {
        console.log(result);
        console.log('[success]');
    },
    fail: (error) => {
        console.log(error);
        console.log('[fail]');
    },
    done: (error, result) => {
        if (error) {
            context.fail(error);
        } else {
            context.succeed(result);
        }
    }
};

// call handler
var index = require('./index');
index.handler(event, context);
