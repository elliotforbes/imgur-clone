import json
import boto3
import os
from decimal import Decimal as D

dynamodb = boto3.resource('dynamodb', region_name="eu-west-1")

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal):
            return int(obj)
        return super(DecimalEncoder, self).default(obj)

def list(event, context):

    table = dynamodb.Table(os.getenv('TABLE',''))
    result = table.scan()

    response = {
        "statusCode": 200,
        "body": json.dumps(result['Items'], cls=DecimalEncoder),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response
