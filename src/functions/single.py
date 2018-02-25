import boto3
from decimalencoder import DecimalEncoder
import json
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb', 'eu-west-1')

def single(event, context):
    table = dynamodb.Table("img-posts")
    key = event['queryStringParameters']['key']

    response = table.get_item(Item={'key': key })
    
    response = {
        "statusCode": 200,
        "body": json.dumps(response['Item'], cls=DecimalEncoder),
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response

