import "./SearchBar.css";
import searchIcon from "../../../public/images/Combined Shape.png";
import { useState } from "react";

function SearchBar(props) {
  const [username, setUsername] = useState("");

  function callApi() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((finalResult) => {
         props.setProfileData(finalResult);
         console.log(finalResult);
      });
  }

  function onSubmit(event) {
    event.preventDefault();
    callApi();
  }

  function onChange(event) {
    setUsername(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={onSubmit} className="search-tool">
        <img className="search-icon" src={searchIcon} />
        <input
          onChange={onChange}
          value={username}
          name="searchName"
          className="search-field"
          type="text"
          placeholder="Search GitHub username..."
        ></input>
        <button className="search-btn">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
