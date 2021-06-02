import { FC, useState } from "react";
import Swipercore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./swiper.module.scss";

export interface SliderProps {
  slides: {
    name: string;
    url: string;
  }[];
}

const Slider: FC<SliderProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  Swipercore.use([Navigation]);

  return (
    <>
      <Swiper
        grabCursor={true}
        spaceBetween={24}
        initialSlide={activeIndex}
        onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        className={style.slider}
        navigation={{
          nextEl: `.${style.slider__navigation__next}`,
          prevEl: `.${style.slider__navigation__prev}`,
          disabledClass: `${style.slider__navigation__disabled}`,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.name} className={style.slider__slide}>
            <picture>
              <source
                srcSet={`/images/${slide.url}.jpg 1x, /images/@2x-${slide.url}.jpg 2x`}
              />
              <img
                className={style.slider__image}
                alt={slide.url}
                src={slide.url}
              />
            </picture>
          </SwiperSlide>
        ))}
        <div className={`${style.slider__navigation} mt-4`}>
          <svg
            className={style.slider__navigation__prev}
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 0 24 24"
            width="36px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
          <p className="m-horizontal-5 caption">{slides[activeIndex].name}</p>
          <svg
            className={style.slider__navigation__next}
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 0 24 24"
            width="36px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
