import logo from './logo.svg';
import './App.css';

function App() {

  const stockDataFinder = ({ticker}) => {

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
       });
       
  }; 

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
