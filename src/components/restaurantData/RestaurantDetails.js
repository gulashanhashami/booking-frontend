import React from "react";
import { CheckOutDate } from "../DateHandler/CheckOutdate";
import { CheckInDate } from "../DateHandler/CheckInDate";
import { AdultDropdown } from "../dropdowns/AdultDropdown";
import { KidDropdown } from "../dropdowns/KidDropdown";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ScrollToTop } from "../ScrollToTop";
export const RestaurantDetails = ()=>{
    const {id} = useParams();

    // dummy data need to replace with backend API
    const lacilitesData = [
        {
            name: "WiFi",
            icon: "https://cdn-icons-png.flaticon.com/512/4305/4305650.png",
        },
        {
            name: "WiFi",
            icon: "https://cdn-icons-png.flaticon.com/512/4305/4305650.png",
        },
        {
            name: "WiFi",
            icon: "https://cdn-icons-png.flaticon.com/512/4305/4305650.png",
        },
        {
            name: "WiFi",
            icon: "https://cdn-icons-png.flaticon.com/512/4305/4305650.png",
        },
        {
            name: "WiFi",
            icon: "https://cdn-icons-png.flaticon.com/512/4305/4305650.png",
        },
        {
            name: "WiFi",
            icon: "https://cdn-icons-png.flaticon.com/512/4305/4305650.png",
        },
        {
            name: "WiFi",
            icon: "https://cdn-icons-png.flaticon.com/512/4305/4305650.png",
        }
    ];

    return (
        <section>
            <ScrollToTop />
            <div className="bg-room bg-cover h-[560px] bg-center relative items-center justify-center">
                {/* <div>{"background image"}</div> */}
                <div className="absolute h-full w-full bg-black/70"></div>
                <h1 className="text-6xl text-white z-20 font-primary text-center">{"room name"} Details</h1>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row h-full py-20">
                    <div className="w-full h-full lg:w-[60%] px-6">
                        <h2 className="h2">{"name"}</h2>
                        <p className="mb-8">{"description"}</p>
                        <img className="mb-8" src="" alt="image of room" />
                        {/*show facilities */}
                        <div className="mt-12">
                            <h3 className="h3 mb-3">Room facilities</h3>
                            <p className="mb-12">{"details in written"}</p>
                            <div className="grid grid-cols-3 gap-6 mb-12">
                                {lacilitesData.map((item, index)=>{
                                    return (
                                       <div className="flex items-center gap-x-3 flex-1" key={index}>
                                        <div className="text-3xl text-accent">
                                            <img className="w-[35%]" src={item.icon} alt="icon" />
                                        </div>
                                        <div className="text-base">
                                            {item.name}
                                        </div>
                                       </div> 
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full lg:w-[40%]">
                        {/* /reservation details */}
                        <div className="py-8 px-6  bg-accent/20 mb-12">
                        <div className="flex flex-col space-y-4 mb-4">
                        <h3>Your reservation</h3>
                        <div className="h-[60px]">
                            <CheckInDate />
                        </div>
                        <div className="h-[60px]">
                            <CheckOutDate />
                        </div>
                        <div className="h-[60px]">
                            <AdultDropdown />
                        </div>
                        <div className="h-[60px]">
                            <KidDropdown />
                        </div>
                        <button className="btn btn-lg btn-primary w-full p-[15px]">
                            Book now for Rs{"price"}
                        </button>
                    </div>
                        </div>
                        {/* rules and regulations */}
                        <div>
                            <h3 className="h3">
                                Hotel rules
                            </h3>
                            <p>write here, hotel rules details</p>
                            <ul className="flex flex-col gap-y-4">
                                <li className="flex items-center gap-x-4">
                                    <FaCheck className="text-accent " />
                                    Check in time is 10 AM to 10 PM
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <FaCheck className="text-accent " />
                                    Check out time is 10 AM
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <FaCheck className="text-accent " />
                                    Pets are not allowed.
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <FaCheck className="text-accent " />
                                    Smoking is not allowed.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}