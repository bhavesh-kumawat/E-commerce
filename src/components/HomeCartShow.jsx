/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeCartShow = ({ isShowCardDiv, cart, dispatch }) => {
  return (
    <div>
      {isShowCardDiv && (
        <div className="cart__products__container">
          {cart.map((cartProd) => (
            <div className="cart__products" key={cartProd.id}>
              <img src={cartProd.image} alt={cartProd.name} />
              <p>{cartProd.name}</p>
              <MdDelete
                style={{ cursor: "pointer", fontSize: "20px" }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE__FROM__CART",
                    payload: cartProd,
                  });
                }}
              />
            </div>
          ))}
          {cart.length ? (
            <Link to="/cart">
              <button className="cartBtn">Go to Cart</button>
            </Link>
          ) : (
            <p>Cart is Empty!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeCartShow;
