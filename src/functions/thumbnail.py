

def generate(event, context):
    print(event)

    response = {
        "statusCode": 200,
        "body": "this worked"
    }

    return response