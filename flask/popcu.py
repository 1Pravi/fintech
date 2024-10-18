import pandas as pd


def get_popular_cuisines():
    # Load data from CSV
    df = pd.read_csv('static/data/rs.csv')

    # Extract top 10 popular cuisines (based on frequency in the dataset)
    cuisine_counts = df['cusine'].value_counts().head(10)

    # Create a summary of cuisine data for insights
    cuisine_data = []

    for cuisine in cuisine_counts.index:
        # Get the subset of the dataframe for each cuisine
        cuisine_df = df[df['cusine'] == cuisine]

        # Insights for each cuisine
        city_distribution = cuisine_df['city'].value_counts().head(5).to_dict()  # Top 5 cities
        avg_rating = cuisine_df['rating'].mean()
        avg_cost_for_two = cuisine_df['cost_for_two'].mean()
        total_restaurants = len(cuisine_df)
        famous_foods = cuisine_df['famous_food'].dropna().unique()

        cuisine_data.append({
            'cuisine': cuisine,
            'city_distribution': city_distribution,
            'average_rating': avg_rating,
            'average_cost_for_two': avg_cost_for_two,
            'total_restaurants': total_restaurants,
            'famous_foods': list(famous_foods)
        })

    # Return the summarized data as insights
    return cuisine_data
