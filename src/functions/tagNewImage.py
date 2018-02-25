import boto3
import os
import uuid

rekognition = boto3.client('rekognition', 'eu-west-1')
dynamo = boto3.resource('dynamodb', 'eu-west-1')

def tagImage(event, content):
    key = uuid.uuid4().hex
    location = event['Records'][0]['s3']['object']['key']
    table = dynamo.Table(os.getenv('TABLE', ''))

    labels = []
    for label in detect_labels(location):
        labels.append(label['Name'])


    table.put_item(
        Item={
            'key': key,
            'location': location,
            'labels': labels 
        }
    )

    response = {
        "statusCode": 200,
        "body": "It Worked!"
    }

    return response
    

def detect_labels(key, max_labels=4, min_confidence=40):
    response = rekognition.detect_labels(
        Image={
            "S3Object": {
                "Bucket": os.getenv('BUCKET', ''),
                "Name": key,
            }
        },
        MaxLabels=max_labels,
        MinConfidence=min_confidence
    ) 
    return response['Labels']
