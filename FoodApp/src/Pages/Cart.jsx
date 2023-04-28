import { useContext, useState } from "react";
import { FoodContext } from "../main";

export const Cart = () => {
  const { foodCart } = useContext(FoodContext);
  const [coupon,setCoupon] = useState(false);
  console.log(foodCart, "cart");
  
  const totalPrice = foodCart?.reduce((acc,curr)=>curr.price+acc,0) - (coupon ? 5 : 0)
  const totalDel = foodCart?.reduce((acc,curr)=>curr.delivery_time+acc,0)

   const couponHandler = ()=>{
    setCoupon(!coupon)
   } 

  return (
    <>
      <h1>Cart</h1>
      <p>Total Delivery Time : {totalDel}</p>
      <p>Total Price : {totalPrice}</p>
      <button className="couponButton" disabled={totalPrice===0} onClick={couponHandler}>{coupon ? "Remove Coupon" : "Apply Coupon"}</button>
      {foodCart?.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="description">
            <p>Name : {item.name}</p>
            <p>Description : {item.description}</p>
            <p>Price : {item.price}</p>
            <p>Delivery Time : {item.delivery_time}</p>
          </div>
        </div>
      ))}
    </>
  );
};
