import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from "swiper/modules";
import img1 from "../../resources/images/sliderImages/img1.jpg";
import img2 from "../../resources/images/sliderImages/img2.jpg";
import img3 from "../../resources/images/sliderImages/img3.jpg";

// dummy data need to replace with backend API
const slides = [
    {
        title: "Book your luxury hotel for vacation",
        bg: img1,
        btnText: "Check our rooms"
    },
    {
        title: "Book your luxury hotel for vacation",
        bg: img2,
        btnText: "Check our rooms"
    },
    {
        title: "Book your luxury hotel for vacation",
        bg: img3,
        btnText: "Check our rooms"
    }
];

export const Slider = ()=>{

    return (
        <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{delay: 3000, disableOnInteraction: false}}
        className='heroSlider h-[600px] lg:h-[89vh] items-center'>
            {slides.map((item, index)=>{
                return <SwiperSlide className="h-full relative items-center flex justify-center" key={index}>
                        <div className="z-20 text-white text-center absolute items-center top-60 lg:text-[1.5rem] flex flex-col justify-center lg:ml-[25%]">
                            <div className="uppercase font-tertiary tracking-[6px] mb-5 lg:text-[1rem] text-[.8rem]">
                            Relax and enjoy
                            </div>
                            <h1 className="font-primary uppercase tracking-[2px] max-w-[920px] leading-tight mb-6">
                                {item.title}
                                </h1>
                                <button className="btn btn-lg btn-primary max-auto lg:text-[1rem] text-[.8rem] p-[12px]">
                                    {item.btnText}
                                    </button>
                            </div>
                    <div className="absolute top-0 w-full h-full">
                        <img className="object-cover w-full h-full" src={item.bg} />
                    </div>
                    <div className="absolute top-0 w-full h-full bg-black/70">

                    </div>
                </SwiperSlide>
            })
            }
            </Swiper>
    );
}