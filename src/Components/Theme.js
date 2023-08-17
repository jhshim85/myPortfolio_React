import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import Nav from "./Nav";
import { FaMoon, FaCircleHalfStroke, FaSun } from "react-icons/fa6";

const Theme = () => {
  
  const { toggleTheme, handler } = useContext(ThemeContext);
  
  return (
    <nav>
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
  );
};

export default Theme