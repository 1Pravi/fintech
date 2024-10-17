from flask import Flask, jsonify, send_from_directory
from RestaurantInsights import get_restaurant_data

app = Flask(__name__, static_folder='../react_app/build', static_url_path='/')


@app.route('/api/restaurants', methods=['GET'])
def restaurants():
    data = get_restaurant_data()
    return jsonify(data)


@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True)
