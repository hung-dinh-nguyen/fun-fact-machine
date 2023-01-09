fetch('https://api.polygon.io/v1/open-close/SPY/2023-01-06?adjusted=true&apiKey=GTg5Bir0PyXXJNO2EXN5syHMW9blMFdv')
  .then((response) => response.json())
  .then((data) => console.log(data));
