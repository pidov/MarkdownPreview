import React from 'react'

export default React.createClass({
  render: function() {
    return (
     <div className="md-container md-output" dangerouslySetInnerHTML={this.props.value}></div>
    )
  }
})
