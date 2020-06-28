import React from 'react';

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: '',
      author: '',
      quote: '',
      color: ''
    }
    // this.getNewQuote = this.getNewQuote.bind(this)
  }
  
  getNewQuote = () => {
    const quoteMath = Math.floor(Math.random() * 100) + 1,
          nextQuote = this.state.quotes[quoteMath],
          nextColor = '#'+Math.random().toString(16).substr(-6);
          
    this.setState({
      quote: nextQuote.quote,
      author: nextQuote.author,
      backgroundColor: nextColor
    })
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
      .then(res => {
        this.setState({ 
          quotes: res.quotes,
          author: res.quotes[0].author,
          quote: res.quotes[0].quote
         })
      })
  }
  render() {
    var { quotes } = this.state;
    return (
      <div id="quote-box">
        <div id="text" style={{color: this.state.backgroundColor}}>
           {this.state.quote} <br/><br/>
         </div>
         <div id="author" style={{color: this.state.backgroundColor}}>
           By: {this.state.author}<br/><br/>
         </div>
         <div id="new-quote">
           <button id="twitter" style={{color: this.state.backgroundColor}}>Twitter</button>
           <button id="facebook" style={{color: this.state.backgroundColor}}>Facebook</button>
           <button id="quote-btn" onClick={this.getNewQuote} style={{color: this.state.backgroundColor}}>New quote</button>
         </div>
         <a id="tweet-quote"></a>
      </div>
    )
  };
}

export default RandomQuote