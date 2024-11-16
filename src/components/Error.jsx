import { useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="Error">
      <h1>Oops!</h1>
      <p>{error.data}</p>
      <p className="not-found">
        {error.statusText}. ({error.status})
      </p>
    </div>
  );
};

export default Error;
