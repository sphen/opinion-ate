//  define new action type
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
//  call .loadRestaurants on passed in api
//  dispatch new storeRestaurants() action when it resolves
//  passing in records
export const loadRestaurants = () => (dispatch, getState, api) => {
  api.loadRestaurants().then(records => {
    dispatch(storeRestaurants(records));
  });
};
//  define storeRestaurants action creator
const storeRestaurants = records => ({
  type: STORE_RESTAURANTS,
  records,
});
