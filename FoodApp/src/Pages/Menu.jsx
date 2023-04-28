import { useContext,useState } from "react";
import { FoodContext } from "../main";

export const Menu = () => {
  const { foodData, cartHandler } = useContext(FoodContext);
const [isChecked,setIsChecked] = useState({isVeg:false,isSpicy:false});


    const vegCheckHandler = ()=>{
        setIsChecked({...isChecked,isVeg:!isChecked.isVeg});
    }
    const spicyCheckHandler = ()=>{
        setIsChecked({...isChecked,isSpicy:!isChecked.isSpicy});
    }

  return (
    <>
      <h1>Menu</h1>
      <div className="checkbox">
      <label>
      <input  type="checkbox" checked={isChecked.isVeg} onChange={vegCheckHandler}/>
      veg
      </label>
      <label>
      <input  type="checkbox" checked={isChecked.isSpicy} onChange={spicyCheckHandler}/>
      Spicy
      </label>
      </div>
      {foodData.map((item) => {
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
