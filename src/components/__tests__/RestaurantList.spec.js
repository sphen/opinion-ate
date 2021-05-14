import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  // define restaurants var
  const restaurants = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];
  let loadRestaurants;
  let context;

  beforeEach(() => {
    // Jest.fn() creats a mock function to allow check
    // that loadRestaurants action was called
    // chain mockName() to it to give function name
    loadRestaurants = jest.fn().mockName('loadRestaurants');

    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  });
  // test if restaurants load on first render
  it('loads restaurants on first render', () => {
    // check that mock function was called and run expecation
    expect(loadRestaurants).toHaveBeenCalled();
  });

  // test if restaurants display
  it('displays the restaurants', () => {
    // destructured queryByText function to check what is rendered
    const {queryByText} = context;
    // queryByText finds an element containing the passed-in text.
    // If found, queryByText returns a reference to the element; if not found, it returns null
    // to confirm they are found, we check that return result is not null.
    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
