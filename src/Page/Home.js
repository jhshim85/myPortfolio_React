import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <main className="page__theme--dark">
      <div className="wrapper heading__container">
        <h1 className="heading__greeting">Hello!</h1>
        <h2 className="heading__name">I'm Jaehyun(Jay).
        <br /><span className="heading__occupation">Front-End Developer</span></h2>
        <h3 className="heading__intro">I am a front-end web developer focused on planning, designing and creating simple & user-friendly products that impact and improve the lives of those around me.</h3>
        <a className="heading__button" href="#about">
          <p className="heading__button--text">more about me</p>
          <FontAwesomeIcon className="heading__button--icon" icon={faArrowLeft} />
        </a>
      </div>
    </main>
  )
}

export default Home;