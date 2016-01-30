import React from 'react'
import styles from './App.scss'
import marked from 'marked'
import RawInput from './RawInput'
import Previewer from './Previewer'
import {connect} from 'react-redux'
import {handleMarkdownChange, loadFile} from '../action_creators'

export const App = React.createClass({
  handleRawInputChange(rawInput) {
    this.props.dispatch(handleMarkdownChange(rawInput));
  },
  handleFileInputChange(e, input) {
    var file = input.files[0];
    this.props.dispatch(loadFile(file));
  },
  render() {
    return (
      <div className="md-wrapper">
        <RawInput value={this.props.markdown} onChange={this.handleRawInputChange} fileChange={this.handleFileInputChange}/>
        <Previewer value={this.props.html}/>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    markdown: state.get('markdown'),
    html: state.get('html')
  };
}

export const AppContainer = connect(mapStateToProps)(App);
