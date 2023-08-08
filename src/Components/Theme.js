import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Theme = () => {
  return (
    <div className="theme__toggle">
      <FontAwesomeIcon icon={faMoon} className="theme__toggle--icon" />
      <div className="theme__toggle--container" tabIndex="0">
        <FontAwesomeIcon
          icon={faCircleHalfStroke}
          className="theme__toggle--notch"
        />
      </div>
      <FontAwesomeIcon icon={faSun} className="theme__toggle--icon" />
    </div>
  );
}

export default Theme