import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './containers/App';
import {Provider} from 'react-redux';
import {setState} from './action_creators';
import {store} from './store'
import {INITIAL_STATE} from './constants'

store.dispatch(setState(INITIAL_STATE));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
