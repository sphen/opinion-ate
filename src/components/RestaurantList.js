import {useEffect} from 'react';
// export as default and named
// default will be connected to redux
// named export for testing
export const RestaurantList = ({loadRestaurants, restaurants}) => {
  // useEffect to run loadRestaurants each time it changes
  // it shouldn't change so it should just run once
  // when component renders
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

export default RestaurantList;
