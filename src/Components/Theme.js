import { FaMoon, FaCircleHalfStroke, FaSun } from "react-icons/fa6";
import { useState, createContext } from "react";

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

  return (
    <>
      <div className={`theme__toggle ${theme}`}>
        <FaMoon className="theme__toggle--icon" />
        <div
          className="theme__toggle--container"
          tabIndex="0"
          onClick={toggleTheme}
        >
          <FaCircleHalfStroke className="theme__toggle--notch" />
        </div>
        <FaSun className="theme__toggle--icon" />
      </div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default Theme