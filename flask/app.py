# app.py

from flask import Flask, jsonify
from flask_cors import CORS
from RestaurantInsights import get_insights

app = Flask(__name__)
CORS(app)


@app.route('/api/insights', methods=['GET'])
def insights_route():
    # Get insights data from ri.py
    insights = get_insights()
    return jsonify(insights)


if __name__ == '__main__':
    app.run(debug=True)
