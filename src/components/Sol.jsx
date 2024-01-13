/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import coin from "../assets/Images/sol.jpeg";
import coin2 from "../assets/Images/sol1.jpeg";
import coin3 from "../assets/Images/sol2.jpeg";
import coin4 from "../assets/Images/sol3.jpeg";
import coin5 from "../assets/Images/sol4.jpeg";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules

export const formatString = (str, formatLen) => {
    const formatted =
      str?.length > formatLen ? str.slice(0, formatLen) + "..." : str;
  
    return formatted;
  };
  
  const Sol = () => {
    return (
        <>
        <h4 className="text-3xl text-white underline lg:ml-8">SOL:</h4>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Paper elevation={3}>
              <div>
                <img src={coin} alt="project image" className="myImg" />
              </div>
              <div className="flex justify-between p-3 items-center">
                <span className="text-sm font-semibold">SOLANAMBS </span>
                <a
                  target="_blank"
                  href="https://x.com/SolanaMBS?s=09"
                  className=" text-sm text-slate-600"
                  rel="noreferrer"
                >
                  {formatString("https://x.com/SolanaMBS?s=09", 20)}
                </a>
              </div>
            </Paper>
          </SwiperSlide>
          <SwiperSlide> 
          <Box className="flex flex-wrap">
            <Paper elevation={3}>
              <div className="">
                <img src={coin2} alt="project image" className="myImg" />
              </div>
              <div className="flex justify-between p-3 items-center">
                <span className="text-sm font-semibold">
                MADLADS {" "}
                </span>
                <a
                  target="_blank"
                  href=" https://x.com/MadLads?s=20"
                  className=" text-sm text-slate-600"
                  rel="noreferrer"
                >
                  {formatString(" https://x.com/MadLads?s=20", 23)}
                </a>
              </div>
            </Paper>
          </Box>
          </SwiperSlide>
          <SwiperSlide>
            
          <Box className="flex flex-wrap">
            <Paper elevation={3}>
              <div>
                <img src={coin3} alt="project image" className="myImg" />
              </div>
              <div className="flex justify-between p-3 items-center">
                <span className="text-sm font-semibold">CLYNOSAURAUZ </span>
                <a
                  target="_blank"
                  href="https://x.com/Claynosaurz?s=20"
                  className=" text-sm text-slate-600"
                  rel="noreferrer"
                >
                  {formatString("https://x.com/Claynosaurz?s=20", 20)}
                </a>
              </div>
            </Paper>
          </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box className="flex flex-wrap">
            <Paper elevation={3}>
              <div>
                <img src={coin4} alt="project image" className="myImg" />
              </div>
              <div className="flex justify-between p-3 items-center">
                <span className="text-sm font-semibold">SUBBER  </span>
                <a
                  target="_blank"
                  href=" https://x.com/subberxyz?s=20 "
                  className=" text-sm text-slate-600"
                  rel="noreferrer"
                >
                  {formatString(" https://x.com/subberxyz?s=20 ", 23)}
                </a>
              </div>
            </Paper>
          </Box>
          </SwiperSlide>
          <SwiperSlide>
              
          <Box className="flex flex-wrap">
            <Paper elevation={3}>
              <div>
                <img src={coin5} alt="project image" className="rounded myImg" />
              </div>
              <div className="flex justify-between p-3 items-center">
                <span className="text-sm font-semibold">FAMOUS FOX FEDERATION  </span>
                <a
                  target="_blank"
                  href=" https://x.com/FamousFoxFed?s=20"
                  className=" text-sm text-slate-600"
                  rel="noreferrer"
                >
                  {formatString(" https://x.com/FamousFoxFed?s=20 ", 13)}
                </a>
              </div>
            </Paper>
          </Box>
          </SwiperSlide>
       
       
        </Swiper>
  
         
         
        
          
          
          
      </>
    )
  }
  
  export default Sol