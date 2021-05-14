import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    // Jest.fn() creats a mock function to allow check
    // that loadRestaurants action was called
    // chain mockName() to it to give function name
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    // import RestaurantList component, render it,
    // and pass loadRestaurants as a component prop
    render(<RestaurantList loadRestaurants={loadRestaurants} />);
    // check that mock function was called and run expecation
    expect(loadRestaurants).toHaveBeenCalled();
  });
});
