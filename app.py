import logging
from flask import Flask, request, jsonify, render_template
from flask_restful import Resource, Api
from joblib import load
import numpy as np

# Set up logging
logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
api = Api(app, prefix="/api/v1")

# Load model and features
try:
    model = load('model/model.joblib')
    features = load('model/features.names')
except Exception as e:
    logging.error(f"Error loading model or features: {e}")
    raise e

class Previsao(Resource):
    def post(self):
        args = request.get_json(force=True)
        
        # Verificar se todas as features estão presentes
        missing_features = [feature for feature in features if feature not in args]
        if missing_features:
            logging.warning(f"Missing features: {missing_features}")
            return jsonify({'error': f'Missing features: {missing_features}'}), 400
        
        # Ordenar os valores de acordo com as features
        try:
            input_values = np.asarray([args[feature] for feature in features]).reshape(1, -1)
        except Exception as e:
            logging.error(f"Error processing input data: {e}")
            return jsonify({'error': 'Invalid input data'}), 400
        
        # Fazer a previsão
        try:
            predict = model.predict(input_values)[0]
        except Exception as e:
            logging.error(f"Error making prediction: {e}")
            return jsonify({'error': 'Prediction failed'}), 500

        return jsonify({'previsao': float(predict)})

# Set up resource routing
api.add_resource(Previsao, '/previsao')

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
