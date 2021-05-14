import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  // test if restaurants load on first render
  it('loads restaurants on first render', () => {
    // Jest.fn() creats a mock function to allow check
    // that loadRestaurants action was called
    // chain mockName() to it to give function name
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    // empty array for restaurants since we don't care about displaying them
    const restaurants = [];
    // import RestaurantList component, render it,
    // and pass loadRestaurants as a component prop
    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
    // check that mock function was called and run expecation
    expect(loadRestaurants).toHaveBeenCalled();
  });

  // test if restaurants display
  it('displays the restaurants', () => {
    // noop = no operation
    const noop = () => {};
    // define restaurants var
    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ];
    // destructured queryByText function to check what is rendered
    const {queryByText} = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />,
    );
    // queryByText finds an element containing the passed-in text.
    // If found, queryByText returns a reference to the element; if not found, it returns null
    // to confirm they are found, we check that return result is not null.
    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
