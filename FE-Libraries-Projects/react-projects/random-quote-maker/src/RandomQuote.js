import React from 'react';
import quotes from "./data/quotes.js"

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const quoteMath = Math.floor(Math.random() * 102) + 1 
    const firstQuote = quotes[quoteMath]
    
    return (
      <div className="new-quote">
          {firstQuote.quote}
          {firstQuote.author}
        {/* { quotes.map((data, key) => {
          return (
              <div key={key}>
                  {data.quote} <br/>BY: {data.author}
              </div>
          )
         })
       } */}
      </div>
    );
  }
}

export default RandomQuote