/* eslint-disable react/prop-types */

import { CartState } from "../context/Context";
import Rating from "./Rating";

const Products = () => {
  const {
    state,
    dispatch,
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();

  const transFormProducts = () => {
    let sortedProducts = state.products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="products__detail">
      {transFormProducts().map((prod) => (
        <div className="product" key={prod.id}>
          <img src={prod.image} alt={prod.name} />
          <div className="product-detail">
            <p>{prod.name}</p>
            <p>
              Price: <span> ₹{prod.price}</span>
            </p>
            {prod.fastDelivery ? <p>Fast delivery</p> : <p>4 days delivery</p>}
            <p className="rating-products">
              <span>
                <Rating rating={prod.rating} />
              </span>
            </p>

            {state.cart.some((p) => p.id === prod.id) ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "REMOVE__FROM__CART",
                    payload: prod,
                  });
                }}
                style={{
                  backgroundColor: "rgb(255, 48, 48)",
                  cursor: "pointer",
                }}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD__TO__CART",
                    payload: prod,
                  });
                }}
                className={!prod.inStock ? "out-of-stock" : "in-stock"}
                disabled={!prod.inStock}
              >
                {prod.inStock ? "Add Cart" : "Out of Stock"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
