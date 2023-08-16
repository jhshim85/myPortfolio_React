import { FaMoon, FaCircleHalfStroke, FaSun } from "react-icons/fa6";
import { useState, createContext } from "react";
import Nav from "./Nav";
const ThemeContext = createContext(null);
export { ThemeContext };

const Theme = ({ children }) => {
  
  const [theme, setTheme] = useState("page__theme--dark");
  const toggleTheme = () => {
    setTheme((current) =>
      current === "page__theme--dark"
        ? "page__theme--light"
        : "page__theme--dark"
    );
  };
  const handler = (e) => {
    return (
      e.key === "Enter" ? toggleTheme() : null
    )
  }

  return (
    <>
      <nav className={theme}>
        <div className="theme__toggle">
          <FaMoon className="theme__toggle--icon" />
          <div
            className="theme__toggle--container"
            tabIndex="0"
            onClick={toggleTheme}
            onKeyDown={handler}
          >
            <FaCircleHalfStroke className="theme__toggle--notch" />
          </div>
          <FaSun className="theme__toggle--icon" />
        </div>
        <Nav />
      </nav>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default Theme