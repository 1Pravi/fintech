import pandas as pd


def get_restaurant_data():
    # Load CSV file

    df = pd.read_csv("static/data/rs.csv")

    # Basic data
    data = df.to_dict(orient='records')

    # Analytics
    analytics = {
        "top_rated_restaurants": get_top_rated_restaurants(df),
        "popular_cuisines": get_popular_cuisines(df),
        "average_cost_by_city": get_average_cost_by_city(df),
        "top_famous_foods": get_top_famous_foods(df)
    }

    return {"data": data, "analytics": analytics}


def get_top_rated_restaurants(df, top_n=5):
    top_rated = df.nlargest(top_n, 'rating')[['name', 'rating', 'city', 'area']]
    return top_rated.to_dict(orient='records')


def get_popular_cuisines(df):
    cuisine_counts = df['cusine'].value_counts().head(5)
    return cuisine_counts.to_dict()


def get_average_cost_by_city(df):
    avg_cost = df.groupby('city')['cost_for_two'].mean().round(2)
    return avg_cost.to_dict()


def get_top_famous_foods(df, top_n=5):
    # Drop rows without famous food data
    df_foods = df.dropna(subset=['famous_food'])
    top_foods = df_foods.nlargest(top_n, 'rating')[['famous_food', 'rating', 'name', 'city']]
    return top_foods.to_dict(orient='records')


