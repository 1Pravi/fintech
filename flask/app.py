from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
from routes.tracking import tracking_blueprint

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Register routes
app.register_blueprint(tracking_blueprint, url_prefix='/api/tracking')


@app.route('/')
def index():
    return jsonify({"message": "Drug Inventory and Supply Chain Tracking System API"})


if __name__ == "__main__":
    app.run(debug=True)
