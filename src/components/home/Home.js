import React from "react";
import { Slider } from "../header/Slider";
import { Restaurants } from "../restaurantData/Restaurants";
import { SearchForm } from "./SearchForm";


export const Home = ()=>{

    return (
        <>
        <Slider />
         <div className=" container mx-auto relative items-center">
            <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:bottom-0 lg:w-[85%] m-auto">
                <SearchForm />
            </div>
         </div>
         <Restaurants />
        </>
    );
}