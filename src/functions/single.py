import boto3
from imgur import decimalencoder
import json

dynamodb = boto3.resource('dynamodb')

def single(event, context):
    table = dynamodb.Table("img-posts")
    # fetch todo from the database

    print(event)
    print(event['queryStringParameters'])
    print(event['queryStringParameters']['key'])

    result = table.get_item(
        Key={
            'key': event['queryStringParameters']['key']
        }
    )

    print(result)
    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(result['Item'],
                           cls=decimalencoder.DecimalEncoder),
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response