const currentDate = new Date(); 
currentDate.setDate(currentDate.getDate() - 1);

yesterdayDate = currentDate.toJSON().slice(0, 10);
console.log(yesterdayDate);

let ticker = "SPY";

fetchString = `https://api.polygon.io/v1/open-close/${ticker}/${yesterdayDate}?adjusted=true&apiKey=GTg5Bir0PyXXJNO2EXN5syHMW9blMFdv`

async function fetchStockData() {
  let response = await fetch(fetchString);
  let data = await response.json();
}

var stockData = fetchStockData();
console.log(stockData); 