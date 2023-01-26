import StockInfo from './components/stock-info/stock-info.js'; 
import Search from './components/search/search.js'; 
import React from 'react';
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
      console.log(this.state.stockTicker)
  }


  stockDataFinder = ({}) => {

    let currentDate = new Date(); 
    currentDate.setDate(currentDate.getDate() - 2);

    var yesterdayDate = currentDate.toJSON().slice(0, 10); 
    
    var stockFetch = `https://api.polygon.io/v1/open-close/${this.state.stockTicker}/${yesterdayDate}?adjusted=true&apiKey=GTg5Bir0PyXXJNO2EXN5syHMW9blMFdv`
    console.log(stockFetch); 

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

