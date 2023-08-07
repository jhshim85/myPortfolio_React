import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Theme = () => {
  return (
    <div className="theme__toggle">
      <FontAwesomeIcon icon={faMoon} />
      <div className="theme__toggle--container">
        <FontAwesomeIcon icon={faCircleHalfStroke} className="theme__toggle--notch"/>
      </div>
      <FontAwesomeIcon icon={faSun} />
    </div>
  )
}

export default Theme