import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  return (
    <main className="home">
      <div className="wrapper home__container">
        <h1 className="heading__greeting">Hello!</h1>
        <h2 className="heading__name">I'm Jaehyun(Jay).
        <br /><span className="heading__occupation">Front-End Developer</span></h2>
        <h3 className="heading__intro">I am a front-end web developer focused on planning, designing and creating simple & user-friendly products that impact and improve the lives of those around me.</h3>
        <Link to='/about' className="heading__button">
          <p className="heading__button--text">more about me</p>
          <FontAwesomeIcon className="heading__button--icon" icon={faArrowLeft} />
        </Link>
      </div>
    </main>
  )
}

export default Home;