import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/root_reducer';

const middlewares = [thunk];
if (node.process.env.NODE_ENV === 'production') {
  middlewares.push(createLogger())
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
