import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {image: HEADS_IMG_URL, heads: 0, tails: 0}

  onToss = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeads = heads
    let latestTails = tails

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeads += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTails += 1
    }
    this.setState({
      image: tossImage,
      heads: latestHeads,
      tails: latestTails,
    })
  }

  render() {
    const {image, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads & Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button className="buttons" type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="count-coins">
            <p className="para1">Total: {total}</p>
            <p className="para1">Heads: {heads}</p>
            <p className="para1">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
