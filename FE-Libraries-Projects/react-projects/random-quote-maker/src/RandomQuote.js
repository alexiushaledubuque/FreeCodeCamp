import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: '',
      author: '',
      quote: '',
      color: ''
    }
    this.getNewQuote = this.getNewQuote.bind(this)
  }
  
  getNewQuote = () => {
    const quoteMath = Math.floor(Math.random() * 100) + 1,
          nextQuote = this.state.quotes[quoteMath],
          nextColor = '#'+Math.random().toString(16).substr(-6);
          
    this.setState({
      quote: nextQuote.quote,
      author: nextQuote.author,
      color: nextColor
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
    const { quotes } = this.state,
          fontColor = this.state.color,
          hreference = 'https://twitter.com/intent/tweet?text="' + this.state.quote + '" ' + this.state.author;
          
    return (
      <div id="quote-box">
        <div id="text" style={{color: this.state.color}}>
           "{this.state.quote}" <br/><br/>
         </div>
         <div id="author" style={{color: this.state.color}}>
           - {this.state.author}<br/><br/>
         </div>
         <div id="next-quote">
           <div id="social-btns">
             <button id="twitter" style={{backgroundColor: fontColor}}>
               <a id="tweet-quote" class="twitter-share-button" href={hreference} target="_blank">Tweet quote
               </a>
             </button>
           </div>
           <div id="quote-btn">
             <button id="new-quote" onClick={this.getNewQuote} style={{backgroundColor: fontColor}}><a>New quote</a></button>
           </div>
         </div>
         <div>
        </div>
      </div>
    )
  };
}

export default RandomQuote