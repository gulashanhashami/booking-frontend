import React from "react";
import { CheckInDate } from "../DateHandler/CheckInDate";
import { CheckOutDate } from "../DateHandler/CheckOutdate";
import { AdultDropdown } from "../dropdowns/AdultDropdown";
import { KidDropdown } from "../dropdowns/KidDropdown";

export const SearchForm = ()=>{

    return (
        <form className="h-[300px] w-full lg:h-[60px]">
            <div className="flex flex-col w-full h-full lg:flex-row">
            {/* <div className="flex-1 border-r">
                <input />
            </div> */}
            <div className="flex-1 border-r">
                <CheckInDate />
            </div>
            <div className="flex-1 border-r">
                <CheckOutDate />
            </div>
            <div className="flex-1 border-r">
                <AdultDropdown />
            </div>
            <div className="flex-1 border-r">
                <KidDropdown />
            </div>
            <button onClick={""} type="submit" className="flex-1.5 btn btn-primary">Search</button>
            </div>
        </form>
    );
}