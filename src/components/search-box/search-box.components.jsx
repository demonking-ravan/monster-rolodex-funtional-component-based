import './search-box.styles.css';

function SearchBox ({ className, onChangeHandler, placeholder }) { 
    return (
        <div>
            <input 
            className={`search-box ${className}`}
            type='search' 
            onChange={onChangeHandler} 
            placeholder={placeholder}
            />
        </div>
    )
}


export default SearchBox;