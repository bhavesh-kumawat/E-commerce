/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { CartState } from "../context/Context";
import HomeCartShow from "./HomeCartShow";

const Header = () => {
  const { state, dispatch, productDispatch } = CartState();
  const [isShowCardDiv, setIsShowCartDiv] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <header className="header">
          <div className="logo">MyShop</div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) =>
                productDispatch({
                  type: "FILTER__BY__SEARCH",
                  payload: e.target.value,
                })
              }
            />
          </div>
          <div
            className="dropdown"
            onClick={() => setIsShowCartDiv(!isShowCardDiv)}
          >
            <FaCartShopping />
            <p>{state.cart.length}</p>

            {isShowCardDiv ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}
          </div>
        </header>
      </form>
      <HomeCartShow
        isShowCardDiv={isShowCardDiv}
        cart={state.cart}
        dispatch={dispatch}
      />
    </>
  );
};

export default Header;
