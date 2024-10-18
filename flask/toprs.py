# toprs.py

import pandas as pd


def get_top_rated_restaurants():
    # Load data from the CSV file
    df = pd.read_csv('static/data/rs.csv')

    # Ensure there are no NaN values in the 'rating' column
    df = df.dropna(subset=['rating'])

    # Sort by 'rating' in descending order to get top-rated restaurants
    top_restaurants_df = df.sort_values(by='rating', ascending=False).head(10)

    # Select columns to return
    top_restaurants = top_restaurants_df[
        ['name', 'city', 'area', 'rating', 'rating_count', 'cusine', 'cost_for_two']].to_dict(orient='records')

    return top_restaurants



