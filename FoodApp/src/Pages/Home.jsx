import { useContext } from "react"
import { FoodContext } from "../main"



export const Home = ()=>{
    const {foodData,menuNavigation} = useContext(FoodContext)
   
    return(
        <>
            <h1>Home </h1>
            <button onClick={menuNavigation}>Menu</button>
        </>
    )
}