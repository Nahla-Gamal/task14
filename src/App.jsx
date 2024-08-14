import "./App.css";
import Content from "./Component/Content/Content";
import SearchBar from "./Component/SearchBar/SearchBar";
import ToggleHeader from "./Component/ToggleHeader/ToggleHeader";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <main>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`page ${theme}`}>
          <div className="theme-content">
            <ToggleHeader></ToggleHeader>
            <SearchBar></SearchBar>
            <Content></Content>
          </div>
        </div>
      </ThemeContext.Provider>
    </main>
  );
}

export default App;
