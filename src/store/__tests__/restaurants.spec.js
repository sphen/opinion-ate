import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import restaurantReducer from '../restaurants/reducers';
import {loadRestaurants} from '../restaurants/actions';

describe('restaurants', () => {
  describe('loadRestaurants action', () => {
    //   async to allow for stubbed network request
    it('stores the restaurants', async () => {
      //    create records to be return by stubbed api
      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
      ];
      //    not http request inside redux store
      //    delegate to api object
      const api = {
        loadRestaurants: () => Promise.resolve(records),
      };
      //    create initial state for reducer
      const initialState = {
        records: [],
      };
      //    create store, only passing restaurant reducer
      const store = createStore(
        restaurantReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      //    dispatch loadRestaurants action
      await store.dispatch(loadRestaurants());
      //    check state of store after
      expect(store.getState().records).toEqual(records);
    });
  });
});
