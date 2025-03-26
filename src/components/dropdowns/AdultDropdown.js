import React from "react";
import {BsChevronDown} from "react-icons/bs";
import {Menu} from "@headlessui/react";

// dummy data need to replace with backend API
const AdultList = [
    {
        name: "Adult", 
        adultCount: 1
    },
    {
        name: "Adult", 
        adultCount: 2
    },
    {
        name: "Adult", 
        adultCount: 3
    },
    {
        name: "Adult", 
        adultCount: 4
    }
]


export const AdultDropdown = ()=>{

    return (
        <Menu as='div' className="w-full h-full bg-white relative">
            <Menu.Button className="w-full h-full flex items-center justify-between px-8">
                Adults
                <BsChevronDown className="text-accent-hover text-base" />
            </Menu.Button>
            <Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
                {AdultList.map((item, index)=>{
                    return <Menu.Item as="li" className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer" key={index}>
                        {item.name}: {item.adultCount}
                    </Menu.Item>
                })}
            </Menu.Items>
        </Menu>
    );
}