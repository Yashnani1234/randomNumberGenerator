// Write your code here
import {Component} from 'react'
import './index.css'

class Random extends Component {
  state = {number: 0}

  buttonClick = () => {
    this.setState({
      number: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {number} = this.state

    return (
      <div className="container">
        <div className="container2">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.buttonClick} type="button">
            Generate
          </button>
          <p className="heading">{number}</p>
        </div>
      </div>
    )
  }
}

export default Random
