import pandas as pd

# Load data
df = pd.read_csv('static/data/rs.csv')


# Overall Insights
def get_insights():
    # Average rating and cost for two
    average_rating = df['rating'].mean()
    average_cost_for_two = df['cost_for_two'].mean()

    # Count of unique cuisines
    unique_cuisines = df['cusine'].nunique()

    # Count of restaurants with online order and reservation options
    online_order_count = df[df['online_order'] == True].shape[0]
    reservation_count = df[df['table_reservation'] == True].shape[0]

    # Location breakdown (by city and area)
    city_counts = df['city'].value_counts().to_dict()
    area_counts = df['area'].value_counts().to_dict()

    insights = {
        "average_rating": average_rating,
        "average_cost_for_two": average_cost_for_two,
        "unique_cuisines": unique_cuisines,
        "online_order_count": online_order_count,
        "reservation_count": reservation_count,
        "city_counts": city_counts,
        "area_counts": area_counts,
    }

    return insights


# Top-Rated Restaurants
def get_top_rated_restaurants():
    top_restaurants = df.nlargest(10, 'rating')[['name', 'city', 'rating']].to_dict(orient='records')
    return {"top_restaurants": top_restaurants}


# Popular Cuisines
def get_popular_cuisines():
    cuisine_counts = df['cusine'].value_counts().head(10).to_dict()
    return {"popular_cuisines": cuisine_counts}


# Famous Foods
def get_famous_food_insights():
    famous_food_counts = df['famous_food'].value_counts().head(10).dropna().to_dict()
    return {"famous_foods": famous_food_counts}


# Online Ordering Trends
def get_online_ordering_trends():
    online_ordering_data = df['online_order'].value_counts(normalize=True).to_dict()
    return {"online_ordering_trends": online_ordering_data}


# Ratings Analysis
def get_ratings_analysis():
    ratings_distribution = df['rating'].value_counts().sort_index().to_dict()
    return {"ratings_distribution": ratings_distribution}
