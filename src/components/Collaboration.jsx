/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import coin from "../assets/Images/coins.jpeg";
import coin2 from "../assets/Images/coi.jpeg";
import coin3 from "../assets/Images/co.jpeg";
import coin4 from "../assets/Images/coin2.jpeg";
import coin5 from "../assets/Images/coin3.jpeg";
import coin6 from "../assets/Images/coin4.jpeg";
import coin7 from "../assets/Images/coin5.jpeg";
import coin8 from "../assets/Images/coin6.jpeg";
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
const Collaboration = () => {
  return (
    <>
      <h4 className="text-3xl text-white underline lg:ml-8">ETH:</h4>
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
              <span className="text-sm font-semibold">CHIMPERS NFT</span>
              <a
                target="_blank"
                href="https://x.com/ChimpersNFT?s=20"
                className=" text-sm text-slate-600"
                rel="noreferrer"
              >
                {formatString("https://x.com/ChimpersNFT?s=20", 20)}
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
                BORED APE YATCH CLUB{" "}
              </span>
              <a
                target="_blank"
                href=" https://x.com/BoredApeYC?s=20"
                className=" text-sm text-slate-600"
                rel="noreferrer"
              >
                {formatString(" https://x.com/BoredApeYC?s=20", 13)}
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
              <span className="text-sm font-semibold">PUDGY PENGUINS </span>
              <a
                target="_blank"
                href="https://x.com/pudgypenguins?s=20"
                className=" text-sm text-slate-600"
                rel="noreferrer"
              >
                {formatString("https://x.com/pudgypenguins?s=20", 18)}
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
              <span className="text-sm font-semibold">MEMELAND </span>
              <a
                target="_blank"
                href=" https://x.com/Memeland?s=20 "
                className=" text-sm text-slate-600"
                rel="noreferrer"
              >
                {formatString(" https://x.com/Memeland?s=20 ", 23)}
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
              <span className="text-sm font-semibold">CRYPTOPUNKS</span>
              <a
                target="_blank"
                href=" https://x.com/cryptopunksnfts?s=20 "
                className=" text-sm text-slate-600"
                rel="noreferrer"
              >
                {formatString(" https://x.com/cryptopunksnfts?s=20 ", 23)}
              </a>
            </div>
          </Paper>
        </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box className="flex flex-wrap">
          <Paper elevation={3}>
            <div>
              <img src={coin6} alt="project image" className="rounded myImg" />
            </div>
            <div className="flex justify-between p-3 items-center">
              <span className="text-sm font-semibold">YOGAPETZ </span>
              <a
                target="_blank"
                href=" https://x.com/Yogapetz?s=20 "
                className=" text-sm text-slate-600"
                rel="noreferrer"
              >
                {formatString(" https://x.com/Yogapetz?s=20 ", 23)}
              </a>
            </div>
          </Paper>
        </Box>
        </SwiperSlide>
        <SwiperSlide><Box className="flex flex-wrap">
          <Paper elevation={3}>
            <div>
              <img src={coin8} alt="project image" className="rounded myImg" />
            </div>
            <div className="flex justify-between p-3 items-center">
              <span className="text-sm font-semibold">YYOOTS </span>
              <a
                target="_blank"
                href="  https://x.com/y00tsNFT?s=20 "
                className=" text-sm text-slate-600"
                rel="noreferrer"
              >
                {formatString("  https://x.com/y00tsNFT?s=20 ", 23)}
              </a>
            </div>
          </Paper>
        </Box></SwiperSlide>
        <SwiperSlide>
        <Box className="flex flex-wrap">
          <Paper elevation={3}>
            <div>
              <img src={coin7} alt="project image" className="rounded myImg" />
            </div>
            <div className="flex justify-between p-3 items-center">
              <span className="text-sm font-semibold">DEGODS </span>
              <a
                target="_blank"
                href=" https://x.com/DeGodsNFT?s=20"
                className=" text-sm text-slate-600"
                rel="noreferrer"
              >
                {formatString(" https://x.com/DeGodsNFT?s=20 ", 23)}
              </a>
            </div>
          </Paper>
        </Box>
        </SwiperSlide>
      </Swiper>

       
       
      
        
        
        
    </>
  );
};

export default Collaboration;
