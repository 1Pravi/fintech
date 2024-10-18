from flask import Flask, jsonify
from flask_cors import CORS
from toprs import get_top_rated_restaurants  # Import from toprs.py
from popcu import get_popular_cuisines  # Import the new popular cuisines insights function
from ff import get_famous_food_insights
from ri import get_online_ordering_trends, get_ratings_analysis

app = Flask(__name__)
CORS(app)


@app.route('/api/insights', methods=['GET'])
def insights_route():
    # Get insights data
    insights = get_insights()
    return jsonify(insights)


@app.route('/api/top-rated-restaurants', methods=['GET'])
def top_rated_restaurants_route():
    # Get top-rated restaurants data
    top_rated_restaurants = get_top_rated_restaurants()
    return jsonify(top_rated_restaurants)


@app.route('/api/popular-cuisines', methods=['GET'])
def popular_cuisines_route():
    # Get popular cuisines insights
    popular_cuisines = get_popular_cuisines()
    return jsonify(popular_cuisines)


@app.route('/api/famous-foods', methods=['GET'])
def famous_foods_route():
    # Get famous food insights
    famous_foods = get_famous_food_insights()
    return jsonify(famous_foods)


@app.route('/api/online-ordering-trends', methods=['GET'])
def online_ordering_trends_route():
    online_ordering_trends = get_online_ordering_trends()
    return jsonify(online_ordering_trends)


@app.route('/api/ratings-analysis', methods=['GET'])
def ratings_analysis_route():
    ratings_analysis = get_ratings_analysis()
    return jsonify(ratings_analysis)


if __name__ == '__main__':
    app.run(debug=True)
