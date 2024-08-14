import "./ToggleHeader.css";
import Sun from "../../../public/images/002-sun.svg";
import Moon from "../../../public/images/moon.svg";
import { ThemeContext } from "../../App";
import { useContext } from "react";

function ToggleHeader() {
  const themeContext = useContext(ThemeContext);

  function handleOnChange(event) {
    let newValue;
    console.log("event.target.checked", event);
    if (themeContext.theme == "light") {
      newValue = "dark";
    } else {
      newValue = "light";
    }
    themeContext.setTheme(newValue);
  }

  return (
    <div className="header">
      <label className="header-name">devfinder</label>
      <div className="actions" onClick={handleOnChange}>
        {themeContext.theme == "light" ? (
          <>
            <label className="mode">Light</label>
            <img className="sun-img" src={Sun} />
          </>
        ) : (
          <>
            <label className="mode">Dark</label>
            <img className="moon-img" src={Moon} />
          </>
        )}
      </div>
    </div>
  );
}

export default ToggleHeader;
