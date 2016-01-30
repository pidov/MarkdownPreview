import readFile from './services/readFile'

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function handleMarkdownChange(markdown) {
  return {
    type: 'MARKDOWN_CHANGE',
    markdown
  };
}

export function loadFile(file) {
  return dispatch => {
    //dispatch(loadingFile(file))
    return readFile(file)
      .then(content => dispatch(handleMarkdownChange(content)))
  }
}
