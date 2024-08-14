
import "./SearchBar.css"
import searchIcon from "../../../public/images/Combined Shape.png"

function SearchBar() {
    return (
       <div className="search">  
         <div className="search-tool">
            <img className="search-icon" src={searchIcon}/>
            <input className="search-field" type="text" placeholder="Search GitHub username..."></input>
         </div>
         <button className="search-btn">Search</button>
       </div>
    )
}

export default SearchBar;