import React, {Component, useRef} from 'react'
import App from './App'

class Paren extends Component{
  state ={
    text: ""
  }
  testFunction = value => {
    this.setState({
      text:value
    })
  }
    render(){
    return <div>
        {this.state.text}
    </div>
    }
}

export default Paren