import React, {Component, useRef} from 'react'
import App from './App'

class Paren extends Component{
    handleOnChange = (event) => {
        this.content.testFunction(event.target.value)
    }
    render(){
    return <div>
        <input onChange={this.handleOnChange}/>
        <App ref={instance => this.content = instance}/>
    </div>
    }
}

export default Paren