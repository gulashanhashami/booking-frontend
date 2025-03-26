// import React from "react";

// export const KidDropdown = ()=>{

//     return (
//         <div>KidDropdown</div>
//     );
// }
import React from "react";
import {BsChevronDown} from "react-icons/bs";
import {Menu} from "@headlessui/react";

// dummy data need to replace with backend API
const kidList = [
    {
        name: "Kid", 
        kidCount: 0
    },
    {
        name: "Kid", 
        kidCount: 1
    },
    {
        name: "Kid", 
        kidCount: 2
    },
    {
        name: "Kid", 
        kidCount: 3
    },
    {
        name: "Kid", 
        kidCount: 4
    }
]


export const KidDropdown = ()=>{

    return (
        <Menu as='div' className="w-full h-full bg-white relative">
            <Menu.Button className="w-full h-full flex items-center justify-between px-8">
                Kids
                <BsChevronDown className="text-accent-hover text-base" />
            </Menu.Button>
            <Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
                {kidList.map((item, index)=>{
                    return <Menu.Item as="li" className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer" key={index}>
                        {item.name}: {item.kidCount}
                    </Menu.Item>
                })}
            </Menu.Items>
        </Menu>
    );
}