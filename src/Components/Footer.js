import { ThemeContext } from "./Theme";
import { useContext } from "react";

const Footer = () => {
  
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <p>© 2022 Jaehyun(Jay) Shim</p>
    </footer>
  );
};

export default Footer;
