import React, { Component, PropTypes } from 'react'

class Click extends Component{
  constructor(props) {
    super(props)
    this.beClickedTwice = this.beClickedTwice.bind(this)
  }

  beClickedTwice() {
    for ( let i = 0; i < 2; i++ ){
      this.props.beClicked()
    }
  }

  render() {
    const { value, beClicked, beClickedThird, clearAll} = this.props;
    return (
      <span>
        被点击了：{value} 次
        <button onClick = {beClicked}>点击</button>
        <button onClick = {this.beClickedTwice}>点击+2</button>
        <button onClick = {beClickedThird}>点击+3</button>
        <button onClick = {clearAll}>点击清零</button>
      </span>
    )
  }
}
Click.propTypes = {
  value: PropTypes.number.isRequired,
  beClicked: PropTypes.func.isRequired,
  beClickedThird: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired
}

export default Click
