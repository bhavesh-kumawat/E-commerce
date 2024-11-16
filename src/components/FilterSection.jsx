import Rating from "./Rating";
import { CartState } from "../context/Context";

const FilterSection = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
    productDispatch,
  } = CartState();

  return (
    <>
      <h2>Filter Products</h2>
      <div className="filter__container">
        <div className="ascending filter">
          <label htmlFor="ascending">
            <input
              type="radio"
              name="class"
              id="ascending"
              onChange={() =>
                productDispatch({
                  type: "SORT__BY__PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
            Ascending
          </label>
        </div>
        <div className="descending filter">
          <label htmlFor="descending">
            <input
              type="radio"
              name="class"
              id="descending"
              onChange={() =>
                productDispatch({
                  type: "SORT__BY__PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            />
            Descending
          </label>
        </div>
        <div className="inStock filter">
          <label>
            <input
              type="checkbox"
              onChange={() => {
                productDispatch({
                  type: "FILTER__BY__STOCK",
                });
              }}
              checked={byStock}
            />
            Include out of stock
          </label>
        </div>
        <div className="fast-delivery filter">
          <label>
            <input
              type="checkbox"
              onChange={() =>
                productDispatch({
                  type: "FILTER__BY__DELIVERY",
                })
              }
              checked={byFastDelivery}
            />
            fast-delivery Only
          </label>
        </div>
        <span>
          <Rating
            rating={byRating}
            onClick={(i) =>
              productDispatch({
                type: "FILTER__BY__RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </span>
      </div>
      <button
        className="clear-filter"
        onClick={() =>
          productDispatch({
            type: "CLEAR__FILTERS",
          })
        }
      >
        Clear Filter
      </button>
    </>
  );
};

export default FilterSection;
