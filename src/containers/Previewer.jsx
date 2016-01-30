import React from 'react'

export default React.createClass({
  getMarkup() {
    return {
      __html: this.props.value
    }
  },
  render() {
    return (
     <div dangerouslySetInnerHTML={this.getMarkup()}  className="md-container md-output" ></div>
    )
  }
})
