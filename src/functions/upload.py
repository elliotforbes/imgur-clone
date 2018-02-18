import boto3
import json
import base64

s3 = boto3.client('s3')
dynamo = boto3.resource('dynamodb')

def upload(event, context):

    print(event['body'])

    with open('/tmp/test.png', 'wb') as file:
        file.write(base64.b64encode(event['body']))

    s3.upload_file('/tmp/test.png', 'imgur-serverless', 'test.png')

    key = 'Test'
    s3_bucket_location = "https://tutorialedge.net"

    table = dynamo.Table('img-posts')
    table.put_item(
        Item={
            'key': key,
            'location': s3_bucket_location
        }
    )

    response = {
        "statusCode": 200,
        'headers': {
        'Access-Control-Allow-Origin': '*'
        },
    }

    return response