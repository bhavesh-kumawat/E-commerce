/* eslint-disable react/prop-types */
import FilterSection from "./FilterSection";
import Products from "./Products";

const Home = () => {
  return (
    <div className="main">
      <div className="filter__section">
        <FilterSection />
      </div>
      <div className="products__container">
        <Products />
      </div>
    </div>
  );
};

export default Home;
