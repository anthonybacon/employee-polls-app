/**
 * NotFound.js
 *
 * Component that describes a 404 error page
 *
 */

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"

const NotFound = () => {
  return (
    <div className="text-center" style={{ marginTop: "30px" }}>
      <h1>Page not found!</h1>
      <div>
        <p>Oooops! The page you are looking for does not exist!</p>
        <p>
          <AiFillHome /> Come back <Link to="/">home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
