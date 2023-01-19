import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  constructor(props) {
      super(props); 
      this.state = {
          input: "Enter URLs Here",
          stockData: "",
      }; 
      this.handleChange = this.handleChange.bind(this);
      this.stockDataFinder = this.stockDataFinder.bind(this);
  }

  handleChange(e) {
      this.setState({
          input: e.target.value
      }); 
      console.log(this.state.input)
  }


  stockDataFinder = ({ticker}) => {

    let currentDate = new Date(); 
    currentDate.setDate(currentDate.getDate() - 1);
    yesterdayDate = currentDate.toJSON().slice(0, 10); 
    
    stockFetch = `https://api.polygon.io/v1/open-close/${ticker}/${yesterdayDate}?adjusted=true&apiKey=GTg5Bir0PyXXJNO2EXN5syHMW9blMFdv`
    
    var stockData;

    fetch(stockFetch)
      .then(res => res.json())
      .then(data => {
        stockData = data;
       })
      .then(() => {
        console.log(stockData);
       })

       this.setState({
        stockData: stockData
       })
  };
 
  opener() {
    const re_url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ig

    let input = this.state.input;
    var urls = input.match(re_url)

    console.log(urls);

    urls.forEach(url => {
      window.open(url)
    })
  } 
 
  render() {
    return (
    <div className="App">
        <div className="intro">
          <h1>Multi-URL Opener</h1>
            <p>Tool to Open Multiple URLs at Once!</p>
          <div className="instructions">
            <h2>Instructions</h2>
              <ol>
                <li>Enter one full URL address per line</li>
                <li>Make sure to allow pop-ups and redirects for this site</li>
                <li>Click on "PREVIEW" to create a numbered list of links</li>
                <li>Press on "OPEN" to open all URLs in new tabs</li>
              </ol>
          </div>
         
        </div>
        <UrlParser input={this.state.input} onChange={this.handleChange} onClick={this.parser}/>
        <Previewer preview={this.state.preview} onClick={this.opener}/> 
    </div>
    );
  }
}

export default App;

