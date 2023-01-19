const currentDate = new Date(); 
currentDate.setDate(currentDate.getDate() - 1);

yesterdayDate = currentDate.toJSON().slice(0, 10);
console.log(yesterdayDate);

let ticker = "SPY";

stockFetch = `https://api.polygon.io/v1/open-close/${ticker}/${yesterdayDate}?adjusted=true&apiKey=GTg5Bir0PyXXJNO2EXN5syHMW9blMFdv`

var stockData = fetch(stockFetch);

console.log(stockData); 
