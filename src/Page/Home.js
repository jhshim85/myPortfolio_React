const Home = () => {
  return (
    <div class="wrapper heading__container">
      <h1 class="heading__greeting">Hello!</h1>
      <h2 class="heading__name">I'm Jaehyun(Jay).
      <br /><span class="heading__occupation">Front-End Developer</span></h2>
      <h3 class="heading__intro">I am a front-end web developer focused on planning, designing and creating simple & user-friendly products that impact and improve the lives of those around me.</h3>
      <a class="heading__button" href="#about">
        <span class="heading__button--text">more about me</span>
        <span class="heading__button--icon fa fa-arrow-right"></span>
      </a>
    </div>
  )
}

export default Home;