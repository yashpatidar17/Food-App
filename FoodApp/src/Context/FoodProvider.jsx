import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Data/Api";
import { useNavigate } from "react-router";

export const FoodContext = createContext();
export const FoodContextProvider = ({ children }) => {
  const [foodData, setFooddata] = useState([]);
  const [foodCart, setFoodCart] = useState([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await fakeFetch(
          "https://example.com/api/menu"
        );
        if (status === 200) {
          setFooddata(data.menu);
          console.log("useEffect")
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const cartHandler = (item) => {
    setFoodCart((prev) => [...prev, item]);
  };

  const cartValue = foodCart?.length;
  //    const cartValue = foodCart.reduce((acc,curr)=>acc + curr.length,0)

  const menuNavigation = () => {
    navigate("/menu");
  };

  return (
    <>
      <FoodContext.Provider
        value={{ foodCart,foodData, cartHandler, cartValue, menuNavigation }}
      >
        {children}
      </FoodContext.Provider>
    </>
  );
};
