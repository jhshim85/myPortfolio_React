import { useEffect, useState, useContext } from "react";
import Client from "../util/useContentful";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ThemeContext } from "../Components/Theme";

const Projects = () => {

  const { theme } = useContext(ThemeContext);
  
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await Client.getEntries({
          content_type: "projects",
        });
        
        if (!!res) {
          const items =
            res?.items.map((item) => ({
              id: item?.sys?.id,
              title: item?.fields?.title,
              image: item?.fields?.image?.fields?.file?.url,
              imageName: item?.fields?.image?.fields?.title,
              url: item?.fields?.url
            })) || [];
          setProjects(items);
          setLoading(false);
        }
      } catch (error) {
        console.log(`Error fetching card content: ${error}`);
        setError(error);
        setLoading(false);
      }
    };
    getProjects();
  }, []);
  
  const settings = {
    autoPlay: false,
    emulateTouch: true,
    infiniteLoop: true,
    selectedItem: 0,
    showStatus: false,
    showThumbs: false,
    stopOnHover: false,
    transitionTime: 500,
    useKeyboardArrows: true,
  };

  return (
    <main className={`projects ${theme}`}>
      <div className="wrapper">
        <h1 className="section__heading">My <span>Projects</span></h1>
        <h2 className="section__heading--bg">Projects</h2>
        <div className="projects__container">
          <Carousel
            {...settings}
            renderArrowPrev={(clickHandler, hasPrev) =>
              hasPrev && (
                <div
                  className="carousel__button carousel__button--left"
                  onClick={clickHandler}
                >
                  <FaCircleChevronLeft className="carousel__button--arrows" />
                </div>
              )
            }
            renderArrowNext={(clickHandler, hasNext) =>
              hasNext && (
                <div
                  className="carousel__button carousel__button--right"
                  onClick={clickHandler}
                >
                  <FaCircleChevronRight className="carousel__button--arrows" />
                </div>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const defStyle = {
                display: "inline-block",
                marginLeft: 20,
                cursor: "pointer",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                backgroundColor: "#666",
              };
              const style =
                isSelected && theme === "page__theme--dark"
                  ? { ...defStyle, backgroundColor: "#ffb400" }
                  : isSelected && theme === "page__theme--light"
                  ? { ...defStyle, backgroundColor: "#72b626" }
                  : !isSelected && theme === "page__theme--light"
                  ? { ...defStyle, backgroundColor: "#2b2a2a" }
                  : { ...defStyle };
              return (
                <div
                  className={theme}
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {projects.map((item) => {
              return (
                <Link to={`/projects/${item.url}`} key={item.id}>
                  <div className="projects__list">
                    <div className="projects__list--pic">
                      <img src={item.image} alt={item.imageName} />
                    </div>
                    <div className="projects__list--title">
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default Projects;
