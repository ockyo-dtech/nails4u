import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_0 from '../../assets/images/img_0.jpg';
import slide_image_1 from '../../assets/images/img_1.jpg';
import slide_image_2 from '../../assets/images/img_2.jpg';
import slide_image_3 from '../../assets/images/img_3.jpg';
import slide_image_4 from '../../assets/images/img_4.jpg';
import slide_image_5 from '../../assets/images/img_5.jpg';
import slide_image_6 from '../../assets/images/img_6.jpg';
import slide_image_7 from '../../assets/images/img_7.jpg';



function Service() {

    const [heading, setHeading] = useState('Flower Gallery');

    // Cập nhật tiêu đề khi slide thay đổi
    const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex; // Lấy chỉ số của slide hiện tại
        console.log('Active Index:', realIndex);
        switch (realIndex) {
            case 0:
                setHeading('Manicure');
                break;
            case 1:
                setHeading('Pedicure');
                break;
            case 2:
                setHeading('Combo');
                break;
            case 3:
                setHeading('Eyelash extension');
                break;
            case 4:
                setHeading('Kid service');
                break;
            case 5:
                setHeading('Extra service');
                break;
            case 6:
                setHeading('Nail enhancements');
                break;
            case 7:
                setHeading('Waxing & tinting');
                break;
            default:
                setHeading('Our services');
        }
    };
    return (
        <div className="container mx-auto px-4 py-0">
            <h1 className="py-4 text-5xl text-center">{heading}</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="h-[35rem] lg:h-[52rem] py-8 relative"
                onSlideChange={handleSlideChange}  // Đăng ký sự kiện khi slide thay đổi
            >
                <SwiperSlide className="w-[19rem] h-[25rem] lg:w-[36rem] lg:h-[42rem]  relative">
                    <img src={slide_image_1} alt="slide_image" className="w-[20rem] h-[28rem] lg:w-[37rem] lg:h-[42rem]  rounded-2xl object-cover " />

                </SwiperSlide>

                <SwiperSlide className="w-[19rem] h-[25rem] lg:w-[36rem] lg:h-[42rem]  relative">
                    <img src={slide_image_2} alt="slide_image" className="w-[20rem] h-[28rem] lg:w-[37rem] lg:h-[42rem]  rounded-2xl object-cover " />

                </SwiperSlide>

                <SwiperSlide className="w-[19rem] h-[25rem] lg:w-[36rem] lg:h-[42rem]  relative">
                    <img src={slide_image_3} alt="slide_image" className="w-[20rem] h-[28rem] lg:w-[37rem] lg:h-[42rem]  rounded-2xl object-cover " />

                </SwiperSlide>

                <SwiperSlide className="w-[19rem] h-[25rem] lg:w-[36rem] lg:h-[42rem]  relative">
                    <img src={slide_image_4} alt="slide_image" className="w-[20rem] h-[28rem] lg:w-[37rem] lg:h-[42rem]  rounded-2xl object-cover " />

                </SwiperSlide>

                <SwiperSlide className="w-[19rem] h-[25rem] lg:w-[36rem] lg:h-[42rem]  relative">
                    <img src={slide_image_5} alt="slide_image" className="w-[20rem] h-[28rem] lg:w-[37rem] lg:h-[42rem]  rounded-2xl object-cover " />

                </SwiperSlide>

                <SwiperSlide className="w-[19rem] h-[25rem] lg:w-[36rem] lg:h-[42rem]  relative">
                    <img src={slide_image_6} alt="slide_image" className="w-[20rem] h-[28rem] lg:w-[37rem] lg:h-[42rem]  rounded-2xl object-cover " />

                </SwiperSlide>

                <SwiperSlide className="w-[19rem] h-[25rem] lg:w-[36rem] lg:h-[42rem]  relative">
                    <img src={slide_image_7} alt="slide_image" className="w-[20rem] h-[28rem] lg:w-[37rem] lg:h-[42rem]  rounded-2xl object-cover " />

                </SwiperSlide>


                {/* <div className="absolute bottom-8 w-full flex justify-center items-center">
                    <div className="swiper-button-prev slider-arrow bg-white rounded-full p-2 mx-2 shadow-lg">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow bg-white rounded-full p-2 mx-2 shadow-lg">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination w-[15rem] relative bottom-4"></div>
                </div> */}

            </Swiper>
        </div>
    );
}

export default Service;

