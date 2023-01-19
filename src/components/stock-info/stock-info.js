import './stock-info.css'

const StockInfo = (props) => {
    return (

        <div className='stockinfo-div'>
            <h2
                id='stockinfo-text'
                className='stockinfo-text'
                type='text'
                value={props.stockTicker}
            />

            <p
                id='opening-value'
                className='opening-value'
                type='text'
                value={props.stockData}
            />
            <p
                id='closing-value'
                className='closing-value'
                type='text'
                value={props.stockData}
            />
    
        </div>
    )
};

export default StockInfo;