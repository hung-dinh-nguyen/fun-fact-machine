import './stock-info.css'

const StockInfo = (props) => {
    return (

        <div className='stockinfo-div'>
            <h2
                id='stockinfo-text'
                className='stockinfo-text'
                type='text'

            >{props.stockTicker}</h2>

            <p
                id='opening-value'
                className='opening-value'
                type='text'
            >{props.stockData.open}</p>
            <p
                id='closing-value'
                className='closing-value'
                type='text'
            >{props.stockData.close}</p>
    
        </div>
    )
};

export default StockInfo;