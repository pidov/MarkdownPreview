import React from 'react'

export default React.createClass({
  handleChange(e) {
    this.props.onChange(this.refs.rawInput.value)
  },
  handleFileChange(e) {
    this.props.fileChange(e, this.refs.filesInput)
  },
  render() {
    return (
      <div className="md-container md-input">
        <textarea value={this.props.value} onChange={this.handleChange} ref="rawInput"></textarea>
        <input onChange={this.handleFileChange} ref="filesInput" type="file" />
      </div>
    )
  }
})
