import { FaLocationDot, FaEnvelope, FaCalendarDays, FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {

  return (
    <main className="contact">
      <div className="wrapper">
        <h1 className="section__heading">Contact <span>Me</span></h1>
        <h2 className="section__heading--bg">Contact</h2>
        <div className="contact__container">
          <div className="contact__container--left">
            <h3>Let's Connect!</h3>
            <p>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. I'm also available for a casual chat over coffee or drink!
            </p>
            <address>
              <FaLocationDot className="contact__icon" />
              <p>Toronto / Calgary, Canada</p>
            </address>
          </div>
          <div className="contact__container--right">
            <ul>
              <li>
                <a
                  href="mailto: jaehyunshim.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="contact__icon" />
                  <p>Email</p>
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/jaehyunshim/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCalendarDays className="contact__icon" />
                  <p>Calendly</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jaehyun-shim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="contact__icon" />
                  <p>LinkedIn</p>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jhshim85"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="contact__icon" />
                  <p>Github</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
