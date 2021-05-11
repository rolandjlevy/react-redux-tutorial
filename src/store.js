import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
const initialState = {};
const middleware = [thunk];

// see https://www.youtube.com/watch?v=z2XCUu2wIl0

const store = createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;