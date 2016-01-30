import {Map} from 'immutable';
import marked from 'marked';
import store from './store';

function setState(state, newState) {
  return state.merge(newState);
}

function parse (rawInput, options = {}) {
  return marked(rawInput, options);
}

function setMarkdown(state, markdown) {
  return state.set('markdown', markdown);
}


function setParsed(state) {
  return state.set('html', parse(state.get('markdown'), {sanitize: true}));
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'MARKDOWN_CHANGE':
    return setParsed(setMarkdown(state, action.markdown));
  }
  return state;
}
