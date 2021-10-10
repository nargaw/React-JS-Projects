//1.import react
//2. get API url
//3. creat the layout
//4. onclick event listeners
//5. style
//6. check

const API = 'https://raw.githubusercontent.com/nargaw/React-JS-Projects/main/The-Office-Random-Quote-Gen-main/office.json';

class App extends React.Component {
  state = {
    quotes: [],
    index: 0
  }
  
  componentDidMount(){
    fetch(API).then(res => res.json())
      .then(res => {
        this.setState({
          quotes: res.quotes
        }, this.getRandomIndex);
    });
  }
  
  getRandomIndex = () => {
    const {quotes} = this.state;
    
    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index
      });
    }
  }
  
  render(){
    const { quotes, index} = this.state;
    
    const quote = quotes[index];
    
    const tweetURL = 'https://twitter.com/intent/tweet?text=${quote.quote}-{quote.author}';
  
    return (
      <div className ="d-flex justify-content-center align-items-center vh-100">
        <div>
          <div className ="box p-5 rounded" id="quote-box">
            {
              quote &&( 
                <div className="mb-5">
                  <i className="fas fa-quote-left"></i>
                  <p id="text">{quote.quote} </p>
                  <cite id="author" className="d-block text-right">-{quote.author} </cite>
                </div>
              )}
            <div id="buttons" className="d-flex row">
              <a id="tweet-quote" className="btn btn-sm btn-outline-dark" target="_blank" href={tweetURL}><i className="fab fa-twitter"></i></a>
              <button id="new-quote" className="btn btn-sm btn-outline-dark" onClick={this.getRandomIndex}><i className="fas fa-random"></i></button>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
