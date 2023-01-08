import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "../../styles/Slider.module.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon style={{ color: "white" }} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon style={{ color: "white" }} />
    </div>
  );
}

const sliderData = [
  {
    title: "AUDIO QUALITY",
    description:
      "We distribute products designed and manufactured by leading audio industry artisans. On this level of quality nothing will prevent you from appreciating the full potential of sound.",
  },
  {
    title: "AUDIO QUALITY",
    description:
      "We distribute products designed and manufactured by leading audio industry artisans. On this level of quality nothing will prevent you from appreciating the full potential of sound.",
  },
  {
    title: "AUDIO QUALITY",
    description:
      "We distribute products designed and manufactured by leading audio industry artisans. On this level of quality nothing will prevent you from appreciating the full potential of sound.",
  },
  {
    title: "AUDIO QUALITY",
    description:
      "We distribute products designed and manufactured by leading audio industry artisans. On this level of quality nothing will prevent you from appreciating the full potential of sound.",
  },
];
export default function LoudSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className={styles.sliderContainer}>
      <Container maxWidth="lg">
        <Slider {...settings}>
          {sliderData.map(({ title, description }) => {
            return (
              <div key={title}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: "white" }}
                    fontWeight="bold"
                  >
                    {title.toUpperCase()}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "white" }}>
                    {description}
                  </Typography>
                </Box>
              </div>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
}
