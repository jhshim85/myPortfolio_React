import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <main className="ePage">
      <div className="ePage__container">
        <h1 className="ePage__container--heading">404 - page not found</h1>
        <p className="ePage__container--text">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable
        </p>
        <Link to={`/`} tabIndex={-1}>
          <button className="ePage__container--button">Go Back Home</button>
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage