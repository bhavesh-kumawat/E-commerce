import { MdDelete } from "react-icons/md";
import { CartState } from "../context/Context";
import "./Cart.css";
import Rating from "./Rating";
import { useEffect, useState } from "react";

const Cart = () => {
  const { state, dispatch } = CartState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state.cart]);

  return (
    <div className="main">
      <div className="card__container products__container">
        {state.cart.map((prod) => (
          <div className="cart__product" key={prod.id}>
            <img src={prod.image} alt={prod.name} />
            <div className="cart__product-detail">
              <p>{prod.name}</p>
              <p>₹{prod.price}</p>
              <p className="rating-products">
                <span>
                  <Rating rating={prod.rating} />
                </span>
              </p>
              <select className="products__quantity">
                {[...Array(5)].map((_, i) => (
                  <option
                    value={i + 1}
                    key={i}
                    onClick={(e) => {
                      dispatch({
                        type: "CHANGE__QTY__PRODUCTS",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      });
                    }}
                  >
                    {i + 1}
                  </option>
                ))}
              </select>
              <MdDelete
                onClick={() => {
                  dispatch({
                    type: "REMOVE__FROM__CART",
                    payload: prod,
                  });
                }}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  marginTop: "10px",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="filter__section cart__section">
        <h2>Subtotal ({state.cart.length}) items</h2>
        <p style={{ fontSize: "20px" }}>
          Total : ₹<span>{total.toFixed(2)}</span>
        </p>
        <button onClick={() => history.back()}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
