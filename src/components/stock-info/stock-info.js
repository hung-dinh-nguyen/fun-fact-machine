import './stock-info.css'

const StockInfo = (props) => {
    return (

        <div className='stockinfo-div'>
            <textarea
                id='stockinfo-text'
                className='stockinfo-text'
                type='text'
                value={props.stockTicker}
            />

            <textarea
                id='opening-value'
                className='opening-value'
                type='text'
                value={props.stockData.open}
            />
            <textarea
                id='closing-value'
                className='closing-value'
                type='text'
                value={props.stockData.close}
            />
    
        </div>
    )
};

export default StockInfo;