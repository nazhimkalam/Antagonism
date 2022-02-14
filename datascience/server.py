import joblib
import numpy as np
import pandas as pd
import re

from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse

APP = Flask(__name__)
APP.config['CORS_HEADERS'] = 'Content-Type'
CORS(APP)
API = Api(APP)


model = joblib.load('antagonism_model')

class Predict(Resource):

    def clean_text(text):
        text = text.lower()
        text = re.sub(r"(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)|^rt|http.+?", "", text)
        return text

    @staticmethod
    def post():
        parser = reqparse.RequestParser()
        parser.add_argument('detectionText')
        
        requestBody = parser.parse_args()  # creates dictionary

        categories = ["Not hate", "hate"]
        result = model.predict(pd.Series(requestBody.detectionText))[0]

        out = {'Prediction': categories[result]}

        return out, 200


API.add_resource(Predict, '/predict')

if __name__ == '__main__':
    APP.run(port=8085)
