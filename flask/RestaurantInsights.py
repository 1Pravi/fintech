# ri.py

import pandas as pd


def get_insights():
    # Load data from CSV file
    df = pd.read_csv('static/data/rs.csv')

    # Calculate insights
    average_rating = df['rating'].mean()
    average_cost_for_two = df['cost_for_two'].mean()
    top_restaurants = df.nlargest(5, 'rating')[['name', 'rating']].to_dict(orient='records')

    # Package insights into a dictionary
    insights = {
        'average_rating': average_rating,
        'average_cost_for_two': average_cost_for_two,
        'top_restaurants': top_restaurants,
    }

    return insights
