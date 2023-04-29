import { useContext, useState } from "react";
import { FoodContext } from "../main";

export const Menu = () => {
  const { foodData, cartHandler } = useContext(FoodContext);
  const [filters, setFilters] = useState({
    filterInput: "",
    // category :{},
    isVeg:false,
    isSpicy:false,
    sortPrice: "",
  });

  const vegCheckHandler = () => {
    setFilters({ ...filters, isVeg: !filters.isVeg });
  };

  const spicyCheckHandler = () => {
    setFilters({ ...filters, isSpicy: !filters.isSpicy });
  };

 

  const inputfilterHandler = (event) => {
    setFilters({ ...filters, filterInput: event.target.value });
  };

  const sortPriceHandler = (event) => {
    console.log(event.target.value)
    setFilters({ ...filters,sortPrice:event.target.value });
  }
  
  

  let filtereData = foodData.filter((item)=>
    item.name.toLowerCase().includes(filters.filterInput.toLowerCase())
  );

   if(filters.isVeg){
    filtereData = filtereData.filter((item)=>item.is_vegetarian)
  }
   
  if(filters.isSpicy){
    filtereData = filtereData.filter((item)=>item.is_spicy)
  }
  

  if(filters.sortPrice === "LowtoHigh"){
    filtereData = filtereData.sort((a,b)=>a.price-b.price)
  }
  else if(filters.sortPrice === "HighToLow"){
    filtereData = filtereData.sort((a,b)=>b.price-a.price)
  }

console.log(filtereData)
  return (
    <>
      <h1>Menu</h1>
      <div className="checkbox">
        <input
          placeholder="search food here"
          onChange={inputfilterHandler}
        />
        <label>
          <input
            type="checkbox"
            // checked={filters.isVeg}
            value="is_vegetarian"
            onChange={vegCheckHandler}
          />
          veg
        </label>
        <label>
          <input
            type="checkbox"
            // checked={filters.isSpicy}
            value="is_spicy"
            onChange={spicyCheckHandler}
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
        instead of checked 
        <label>
          <input
            type="radio"
            value="HighToLow"
            name="PriceRadio"
            // checked={filters.sortPrice === "HighToLow"}
            onChange={sortPriceHandler}
          />
          sort (price) High to Low
        </label>
      </div>

      {filtereData.map((item) => {
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
