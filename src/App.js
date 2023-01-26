import logo from './logo.svg';
import StockInfo from 'stock-info.js'; 
import Search from 'search.js'; 
import './App.css';


class App extends React.Component{
  constructor(props) {
      super(props); 
      this.state = {
        stockTicker: "",
        stockData: "",
      }; 
      this.handleChange = this.handleChange.bind(this);
      this.stockDataFinder = this.stockDataFinder.bind(this);
  }

  handleChange(e) {
      this.setState({
        stockTicker: e.target.value
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
 
 
  render() {
    return (
    <div className="App">
        <div className="intro">
          <h1>TITLE</h1>
            <p>SHORT DESCRIPTION </p>
          <div className="instructions">
            <h2>Instructions</h2>
              <ol>
                <li></li>
              </ol>
          </div>
         
        </div>
        <Search onChange={this.handleChange} onClick={this.stockDataFinder} /> 
        <StockInfo stockTicker={this.state.stockTicker} stockData={this.state.stockData} />
    </div>
    );
  }
}

export default App;

