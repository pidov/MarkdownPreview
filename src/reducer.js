import {Map} from 'immutable';
import marked from 'marked';
import store from './store';

function setState(state, newState) {
  return state.merge(newState);
}

function parse(rawInput) {
  return {
    __html: marked(rawInput, {sanitize: true})
  }
}

function markdownChange(state, markdown) {
  const parsed = parse(markdown);
  return state.set('markdown', markdown).set('html', Map(parsed));
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'MARKDOWN_CHANGE':
    return markdownChange(state, action.markdown);
  }
  return state;
}
