import { ThemeContext } from "./Theme";
import { useContext } from "react";

const Footer = () => {
  
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme}>
      <div className="footer">
        <p>© 2023 Jaehyun(Jay) Shim</p>
      </div>
    </footer>
  );
};

export default Footer;
