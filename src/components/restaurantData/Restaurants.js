import React, { useState } from "react";
import { Restaurant } from "./Restaurant";
import { SpinnerDotted } from "spinners-react";

export const Restaurants = ()=>{
    const [loading, setLoading] = useState(false);

    // dummy data need to replace with backend API for restaurants data
    const data = [
        {
            id: 1,
            image: "https://www.home-designing.com/wp-content/uploads/2014/08/open-dining-room-design.jpeg",
            description: "sdfghjkl; cvbnm, fghjkltyuiop vvbbnmm,,, hhjjkkllltyuioo",
            title: "cvbnm ertyuu tyuo",
            price: 500,
            maxPeople: 2,
    },
    {
        id: 2,
        image: "https://www.home-designing.com/wp-content/uploads/2014/08/open-dining-room-design.jpeg",
        description: "sdfghjkl; cvbnm, fghjkltyuiop vvbbnmm,,, hhjjkkllltyuioo",
        title: "cvbnm ertyuu tyuo",
        price: 500,
        maxPeople: 2,
},
{
    id: 3,
    image: "https://www.home-designing.com/wp-content/uploads/2014/08/open-dining-room-design.jpeg",
    description: "sdfghjkl; cvbnm, fghjkltyuiop vvbbnmm,,, hhjjkkllltyuioo",
    title: "cvbnm ertyuu tyuo",
    price: 500,
    maxPeople: 2,
},
{
    id: 4,
    image: "https://www.home-designing.com/wp-content/uploads/2014/08/open-dining-room-design.jpeg",
    description: "sdfghjkl; cvbnm, fghjkltyuiop vvbbnmm,,, hhjjkkllltyuioo",
    title: "cvbnm ertyuu tyuo",
    price: 500,
    maxPeople: 2,
},
{
    id: 5,
    image: "https://www.home-designing.com/wp-content/uploads/2014/08/open-dining-room-design.jpeg",
    description: "sdfghjkl; cvbnm, fghjkltyuiop vvbbnmm,,, hhjjkkllltyuioo",
    title: "cvbnm ertyuu tyuo",
    price: 500,
    maxPeople: 2,
},
{
    id: 6,
    image: "https://www.home-designing.com/wp-content/uploads/2014/08/open-dining-room-design.jpeg",
    description: "sdfghjkl; cvbnm, fghjkltyuiop vvbbnmm,,, hhjjkkllltyuioo",
    title: "cvbnm ertyuu tyuo",
    price: 500,
    maxPeople: 2,
},
{
    id: 7,
    image: "https://www.home-designing.com/wp-content/uploads/2014/08/open-dining-room-design.jpeg",
    description: "sdfghjkl; cvbnm, fghjkltyuiop vvbbnmm,,, hhjjkkllltyuioo",
    title: "cvbnm ertyuu tyuo",
    price: 500,
    maxPeople: 2,
},
{
    id: 8,
    image: "https://www.home-designing.com/wp-content/uploads/2014/08/open-dining-room-design.jpeg",
    description: "sdfghjkl; cvbnm, fghjkltyuiop vvbbnmm,,, hhjjkkllltyuioo",
    title: "cvbnm ertyuu tyuo",
    price: 500,
    maxPeople: 2,
},
];

    return (
        <section className="py-24">
            {/* spinner loading */}
            {loading && (<div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex items-center justify-center">
                <SpinnerDotted color="white" size="10vw" />
            </div>)}
            <div className="container mx-auto lg:px-0">
                <div className="text-center">
                   <div className="font-tertiary uppercase text-[15px] tracking-[6px]">Hotels & Rooms</div> 
                   <h2 className="font-primary text-[2rem] mb-4">Best sevices avalable</h2>
                </div>
                <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
                    {data.map((item)=>{
                        return <Restaurant restaurantData={item} key={item.id} />
                    })}
                </div>
            </div>
        </section>
    );
}