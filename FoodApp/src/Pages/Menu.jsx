import { useContext } from "react";
import { FoodContext } from "../main";

export const Menu = () => {
  const {
    searchHandler,
    cartHandler,
    checkboxHandler,
    sortPriceHandler,
    newArray,
  } = useContext(FoodContext);

  return (
    <>
      <h1>Menu</h1>
      <div className="checkbox">
        <input placeholder="search food here" onChange={searchHandler} />
        <label>
          <input
            type="checkbox"
            // checked={filters.is_vegetarian}
            value="is_vegetarian"
            onChange={checkboxHandler}
          />
          veg
        </label>
        <label>
          <input
            type="checkbox"
            // checked={filters.is_spicy}
            value="is_spicy"
            onChange={checkboxHandler}
          />
          Spicy
        </label>
        <label>
          <input
            type="radio"
            value="LowtoHigh"
            name="PriceRadio"
            // checked={filters.sortPrice === "LowtoHigh"}
            onChange={sortPriceHandler}
          />
          sort (price) Low to High
        </label>
        <label>
          <input
            type="radio"
            value="HightoLow"
            name="PriceRadio"
            // checked={filters.sortPrice === "HighToLow"}
            onChange={sortPriceHandler}
          />
          sort (price) High to Low
        </label>
      </div>

      {newArray.map((item) => {
        const { id, name, description, price, image, delivery_time } = item;
        return (
          <div className="card" key={id}>
            <img src={image} />
            <div id="bakchodDiv">
              <p>Name : {name}</p>
              <p className="description">description : {description}</p>
              <p>Price : {price}</p>
              <p>Delivery Time : {delivery_time}</p>
            </div>
            <button onClick={() => cartHandler(item)}>Add to cart</button>
          </div>
        );
      })}
    </>
  );
};
