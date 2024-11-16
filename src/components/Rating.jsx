/* eslint-disable react/prop-types */
import { FaRegStar, FaStar } from "react-icons/fa6";

const Rating = ({ rating, onClick, style }) => {
  return (
    <div className="rating filter">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <FaStar style={{ fontSize: "14px" }} />
          ) : (
            <FaRegStar style={{ fontSize: "14px" }} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
