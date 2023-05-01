import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Data/Api";
import { useNavigate } from "react-router";

export const FoodContext = createContext();
export const FoodContextProvider = ({ children }) => {
  const [foodData, setFooddata] = useState([]);
  const [foodCart, setFoodCart] = useState([]);
  const [filters, setFilters] = useState({
    filterInput: "",
    // category :{},
    // isVeg:false,
    // isSpicy:false,
    category: [],
    sortPrice: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await fakeFetch(
          "https://example.com/api/menu"
        );
        if (status === 200) {
          setFooddata(data.menu);
          console.log("useEffect");
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  //cart handle code
  const cartHandler = (item) => {
    setFoodCart((prev) => [...prev, item]);
  };

  // cart length code
  const cartValue = foodCart?.length;
  //    const cartValue = foodCart.reduce((acc,curr)=>acc + curr.length,0)

  //menu button
  const menuNavigation = () => {
    navigate("/menu");
  };

  // checkbox,radio button and search filter code start
  const searchHandler = (event) => {
    setFilters({ ...filters, filterInput: event.target.value });
  };

  const checkboxHandler = (event) => {
    const isCheck = event.target.checked;
    if (isCheck) {
      setFilters({
        ...filters,
        category: [...filters.category, event.target.value],
      });
    } else {
      setFilters({
        ...filters,
        category: filters.category.filter(
          (item) => item !== event.target.value
        ),
      });
    }
  };

  const sortPriceHandler = (event) => {
    setFilters({ ...filters, sortPrice: event.target.value });
  };

  const appliedFilters = () => {
    let food = [...foodData];

    if (filters.filterInput.length > 0) {
      food = food.filter((item) =>
        item.name.toUpperCase().includes(filters.filterInput.toUpperCase())
      );
    }

    if (filters.category.length > 0) {
      food = food.filter((item) => filters.category.find((data) => item[data]));
    }

    if (filters.sortPrice === "LowtoHigh") {
      food = food.sort((a, b) => a.price - b.price);
    } else if (filters.sortPrice === "HightoLow") {
      food = food.sort((a, b) => b.price - a.price);
    }

    return food;
  };

  const newArray = appliedFilters();
  // checkbox,radio button and search filter code end

  return (
    <>
      <FoodContext.Provider
        value={{
          foodCart,
          foodData,
          cartHandler,
          cartValue,
          menuNavigation,
          searchHandler,
          checkboxHandler,
          sortPriceHandler,
          newArray,
        }}
      >
        {children}
      </FoodContext.Provider>
    </>
  );
};
