import './search.css'


const Search = (props) => {
    return (
        <div className='search-div'>
            <h2>Search Ticker Symbol</h2>
            <textarea 
                id='search-text'
                className='serach-text'
                onChange={props.onChange}
                type='text'
                value={props.stockTicker}
            />
            <button 
                id='search-button'
                className='search-button'
                onClick={props.onClick}
            >Search</button>
        </div>
    )
};

export default Search;

