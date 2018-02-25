const AWS = require('aws-sdk');

module.exports.requestUploadURL = (event, context, callback) => {
    var s3 = new AWS.S3();

    var params = JSON.parse(event.body);

    var s3Params = {
      Bucket: process.env.BUCKET,
      Key:  params.name,
      ContentType: params.type,
      Expires: 3600,
      ACL: 'public-read'
    };
  
    var uploadURL = s3.getSignedUrl('putObject', s3Params);
  
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ uploadURL: uploadURL }),
    })
  }