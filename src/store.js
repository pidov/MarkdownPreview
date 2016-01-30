import reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import {fromJS} from 'immutable';

const stateTransformer = (state) => state.toJS()

const logger = createLogger({
  stateTransformer,
});

export const store = createStore(reducer, applyMiddleware(thunk, logger));
