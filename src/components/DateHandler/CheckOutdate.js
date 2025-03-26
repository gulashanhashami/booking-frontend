import React, {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/datepicker.css';
import { BsCalendar } from "react-icons/bs";

export const CheckOutDate = ()=>{
    const [startDate, setstartDate] = useState(false);

    return (
        <div className="flex items-center justify-end h-full relative">
            <div className="absolute z-10 pr-8">
                <div>
                  <BsCalendar className="text-accent text-base" />  
                </div>
            </div>
            <DatePicker 
            className="w-full h-full"
            selected={startDate}
            placeholderText="Check out"
            onChange={(date)=> setstartDate(date)}
            />
        </div>
    );
}