import pandas as pd


def get_famous_food_insights():
    # Load the dataset
    df = pd.read_csv('static/data/rs.csv')

    # Remove rows with missing famous food data
    df = df.dropna(subset=['famous_food'])

    # Insights: Top 10 Famous Foods by Frequency
    top_famous_foods = (
        df['famous_food']
        .value_counts()
        .head(50)
        .reset_index()
    )
    top_famous_foods.columns = ['famous_food', 'restaurant_count']

    # Include city with the highest count for each famous food
    top_famous_foods_cities = df[df['famous_food'].isin(top_famous_foods['famous_food'])]
    popular_food_cities = (
        top_famous_foods_cities.groupby('famous_food')['city']
        .apply(lambda x: x.mode().iloc[0])
        .reset_index()
    )

    # Merge to add city information to the top 10 foods
    top_famous_foods = top_famous_foods.merge(popular_food_cities, on='famous_food')

    # Insights: Average rating and cost for top famous foods
    avg_rating_cost = df.groupby('famous_food').agg(
        avg_rating=('rating', 'mean'),
        avg_cost_for_two=('cost_for_two', 'mean')
    ).reset_index()

    # Filter for only the top 10 famous foods
    avg_rating_cost = avg_rating_cost[avg_rating_cost['famous_food'].isin(top_famous_foods['famous_food'])]

    # Merge all information into a single DataFrame
    detailed_famous_foods = top_famous_foods.merge(avg_rating_cost, on='famous_food')

    # Convert to dictionary format for JSON response
    ff = {
        'detailed_famous_foods': detailed_famous_foods.to_dict(orient='records')
    }

    return ff
