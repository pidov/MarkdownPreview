import React from 'react'

export default React.createClass({
  handleChange: function(e) {
    this.props.onChange(this.refs.rawInput.value)
  },
  handleFileChange: function(e) {
    this.props.fileChange(e, this.refs.filesInput)
  },
  render: function() {
    return (
      <div className="md-container md-input">
        <textarea value={this.props.value} onChange={this.handleChange} ref="rawInput"></textarea>
        <input onChange={this.handleFileChange} ref="filesInput" type="file" />
      </div>
    )
  }
})
