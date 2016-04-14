import React, { Component, PropTypes } from 'react'

class Click extends Component{
  // constructor(props) {
  //   super(props)
  //   this.beClicked = this.beClicked.bind(this)
  // },
  // beClicked() {
  //
  // },
  render() {
    const { value, beClicked } = this.props;
    return (
      <span>
        被点击了：{value} 次
        <button onClick = {beClicked}>点击</button>
      </span>
    )
  }
}
Click.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Click
