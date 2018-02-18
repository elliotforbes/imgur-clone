import json
import boto3
from decimal import Decimal as D

dynamodb = boto3.resource('dynamodb', region_name="eu-west-1")

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, D):
            return float(obj)
        return json.JSONEncoder.default(self, obj)

def list(event, context):
    table = dynamodb.Table("img-posts")
    results = table.scan()

    response = {
        "statusCode": 200,
        "body": json.dumps(results['Items'], cls=DecimalEncoder),
        'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        },
    }

    return response
