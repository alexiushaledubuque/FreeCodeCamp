import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    const { quotes } = this.state,
          fontColor = this.state.backgroundColor;
    return (
      <div id="quote-box">
        <div id="text" style={{color: this.state.backgroundColor}}>
           {this.state.quote} <br/><br/>
         </div>
         <div id="author" style={{color: this.state.backgroundColor}}>
           By: {this.state.author}<br/><br/>
         </div>
         <div id="new-quote">
           <div id="social-btns">
             <button id="facebook" style={{color: fontColor}}><i class="fab fa-facebook"></i><a>Facebook</a></button>
             <button id="twitter" style={{color: fontColor}}><a>Twitter</a></button>
           </div>
           <div id="next-quote">
             <button id="quote-btn" onClick={this.getNewQuote} style={{color: fontColor}}><a>New quote</a></button>
           </div>
         </div>
         <div>
          <FontAwesomeIcon icon="edit" symbol />
          <FontAwesomeIcon icon="edit" symbol="edit-icon" />
        </div>
      </div>
    )
  };
}

export default RandomQuote