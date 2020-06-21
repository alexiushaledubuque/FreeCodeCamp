import React from 'react';
import quotes from "./data/quotes.js"

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this)
  }
  
  handleClick = () => {
    const quoteMath = Math.floor(Math.random() * 102) + 1 
    const nextQuote = quotes[quoteMath]
    return nextQuote;
  }
  render() {
    const quoteMath = Math.floor(Math.random() * 102) + 1 
    const nextQuote = quotes[quoteMath]
    return (
      <div className="new-quote">
          {quoteMath}
          {nextQuote.quote}
          {nextQuote.author}
      
      {/* <button onClick={this.handleClick}>New quote</button> */}
      </div>
    )
  };
}

export default RandomQuote