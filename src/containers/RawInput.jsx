import React from 'react'
import AceEditor from 'react-ace';
import brace from 'brace'

import markdown from 'brace/mode/markdown'
  import github from 'brace/theme/github'


export default React.createClass({
  handleChange(val) {
    this.props.onChange(val)
  },
  render() {
    return (
      <div className="md-container md-input">
        <AceEditor
          mode="markdown"
          theme="github"
          className="raw-input"
          onChange={this.handleChange}
          name="UNIQUE_ID_OF_DIV"
          ref="rawInput"
          value={this.props.value}
          width="100%"
          height="100%"
          fontSize={14}
          showPrintMargin={false}
        />
      </div>
    )
  }
})
