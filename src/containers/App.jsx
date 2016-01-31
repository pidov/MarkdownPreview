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
  handleFileInputChange(e) {
    let file = this.refs.filesInput.files[0];
    this.props.dispatch(loadFile(file));
  },
  render() {
    return (
      <div className="page-wrapper">
        <header className="page-header">
          <div className="logo">
            a
          </div>
          <input onChange={this.handleFileInputChange} ref="filesInput" type="file" />
        </header>
        <navigation className="side-nav">
          asd
        </navigation>
        <div className="page-content">
          <RawInput value={this.props.markdown} onChange={this.handleRawInputChange}/>
          <Previewer value={this.props.html}/>
        </div>
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
