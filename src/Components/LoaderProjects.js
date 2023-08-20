const LoaderProjects = () => {
  return (
    <div className="projects__list">
      <div className="projects__list--pic">
        <img
          src="https://eu.ui-avatars.com/api/?name=project&length=7&size=350&font-size=0.15"
          alt="project"
          style={{ objectPosition: "center" }}
        />
      </div>
      <div className="projects__list--title">
        <h3>Project Title</h3>
      </div>
    </div>
  );
}

export default LoaderProjects