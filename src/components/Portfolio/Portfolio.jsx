import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import abc from "../../img/abc.png";
import Randomcatapp from "../../img/Randomcat-app.png";
import Starbucks from "../../img/Starbucks.png";
import simy from "../../img/simy.png";
import game from "../../img/game.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}> Projects</span> <br/>
      <span>Showcasing my creative vision</span>

      {/* slider */}
      <Swiper
        // spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://personal-portfolio-virid-six-35.vercel.app/">
          <img src={abc} alt="" />
          </a>
        </SwiperSlide> 


        <SwiperSlide>
          <a href="https://random-cat-app-pink.vercel.app/">
          <img src={Randomcatapp} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://simransinha456.github.io/-Starbucks/">
          <img src={Starbucks} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://simransinha456.github.io/Restaurant-website/">
          <img src={simy} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://simransinha456.github.io/tic-tac-toe/">
          <img src={game} alt="" />
          </a>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
