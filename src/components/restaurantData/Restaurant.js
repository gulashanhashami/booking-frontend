import React from "react";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Restaurant = (props) => {
console.log("props", props);
const {image, id, description, title, price, maxPeople} = props.restaurantData;
    return (
        <div className="bg-white shadow-2xl h-fit pb-6 group">
            <div className="overflow-hidden">
                <img className="group-hover:scale-110 transition-all duration-300 w-full" src={image} alt="" />
            </div>
            <div className="bg-white shadow-lg max-w-[80%] mx-auto h-[60px] -translate-y-1/2
            flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                <div className="flex justify-center w-[80%]">
                    {/* <div className="flex items-center">
                        <div className="text-accent">
                            <BsArrowsFullscreen className="text-[10px]" />
                        </div>
                        <div>
                            <div>Size</div>
                            <div>{"size"}M2</div>
                        </div>
                    </div> */}
                    <div className="flex items-center gap-x-2">
                        <div className="text-accent">
                            <BsPeople className="text-[18px]" />
                        </div>
                        <div className="flex gap-x-2 sm:text-sm text-xs">
                   <div>Max People</div>
                    <div>{maxPeople}</div>
                   </div>
                    </div>
                </div>
            </div>
           <div className="text-center">
           <Link to={`/restaurant/${id}`}>
                <h3 className="h3">{title}</h3>
            </Link>
            <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">{description}</p>
           </div>
           <Link
           to={`/restaurant/${"id"}`}
           className="btn btn-secondary btn-sm max-w-[200px] container mx-auto sm:text-sm text-xs"
           >
            Book now from ${price}
           </Link>
        </div>
    );
}