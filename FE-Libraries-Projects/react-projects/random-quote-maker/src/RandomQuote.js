import React from 'react';
import quotes from "./data/quotes.js"

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      backgroundColor: ''
    }
    this.getNewQuote = this.getNewQuote.bind(this)
  }
  
  getNewQuote = () => {
    const quoteMath = Math.floor(Math.random() * 102) + 1,
          nextQuote = quotes[quoteMath],
          nextColor = '#'+Math.random().toString(16).substr(-6);
          
    this.setState({
      quote: nextQuote.quote,
      author: nextQuote.author,
      backgroundColor: nextColor
    })
  }

  componentDidMount() {
    this.setState({
      quote: quotes[0].quote,
      author: quotes[0].author})
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text" style={{backgroundColor: this.state.backgroundColor}}>
          {this.state.quote} <br/><br/>
        </div>
        <div id="author" style={{backgroundColor: this.state.backgroundColor}}>
          By: {this.state.author}<br/><br/>
        </div>
        <div id="new-quote">
          <button id="twitter">Twitter</button>
          <button id="facebook">Facebook</button>
          <button id="quote-btn" onClick={this.getNewQuote}>New quote</button>
        </div>
        <a id="tweet-quote"></a>
      </div>
    )
  };
}

export default RandomQuote