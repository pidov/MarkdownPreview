import React from 'react'

export default React.createClass({
  getMarkup: function() {
    return {
      __html: this.props.value
    }
  },
  render: function() {
    return (
     <div dangerouslySetInnerHTML={this.getMarkup()}  className="md-container md-output" ></div>
    )
  }
})
