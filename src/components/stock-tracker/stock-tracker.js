import './stock-tracker.css';

const StockTracker = ({ticker}) => {

    let currentDate = new Date(); 
    currentDate.setDate(currentDate.getDate() - 1);
    
    yesterdayDate = currentDate.toJSON().slice(0, 10); 
    
    fetchString = `https://api.polygon.io/v1/open-close/${ticker}/${yesterdayDate}?adjusted=true&apiKey=GTg5Bir0PyXXJNO2EXN5syHMW9blMFdv`
    console.log(fetchString);
    
    fetch(fetchString)
    .then((response) => response.json()) 
    .then((data) => console.log(data)) 

    
}

export default StockTracker; 