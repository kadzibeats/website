import { FC } from "react";
import PricingCard, {
  PricingCardProps,
} from "../components/pricing-card/PricingCard";
import Slider, { SliderProps } from "../components/swiper/Swiper";
import style from "../styles/home.module.scss";
import Head from "next/head";

const Home: FC<{}> = () => {
  const slides: SliderProps["slides"] = [
    {
      name: "Studio",
      url: "prods",
    },
    {
      name: "Cabine",
      url: "micro",
    },
    {
      name: "Coin artistes",
      url: "rappeurs",
    },
  ];

  const recordingOptions: PricingCardProps["options"] = [
    {
      text: "Prise de voix",
      checked: true,
    },
    {
      text: "Mix basique (compresseur, EQ, reverb)",
      checked: true,
    },
    {
      text: "Export des pistes nues",
      checked: true,
    },
  ];

  const prodsOptions: PricingCardProps["options"] = [
    {
      text: "Format mp3",
      selectText: "mp3",
      selectValue: 15,
    },
    {
      text: "Format WAV",
      selectText: "wav",
      selectValue: 25,
    },
    {
      text: "Multipistes",
      selectText: "multipistes",
      selectValue: 35,
    },
    {
      text: "Exclusivité",
      selectValue: 50,
    },
  ];

  return (
    <>
      <Head>
        <title>Studio d&apos;enregistrement à Dijon - Kadzi | Studio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Kadzi Studio dispose de tout le materiel nécessaire pour un rendu de qualité paré pour la distribution sur les plateformes de streaming."
        ></meta>
      </Head>
      <div className={`${style.hero} mb-7`}>
        <h1 className={`mb-2 ${style.hero__title}`}>
          Studio d&apos;enregistrement à Dijon
        </h1>
        <svg
          className={style.hero__logo}
          version="1.1"
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 300 72.3"
        >
          <g className={style["hero__logo-piano"]}>
            <path
              fill="white"
              d="M92.6,67.5c0,2.6-2.1,4.8-4.8,4.8H50.3c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8l0,0h25.3v1.7h16
		C92.2,65.3,92.6,66.4,92.6,67.5z"
            />
            <path
              fill="white"
              d="M92.3,52.3c0,0.9-0.3,1.8-0.8,2.6H75.5v2.2H23.8c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8h51.7v1.9h15.8
		C92,50.2,92.3,51.2,92.3,52.3z"
            />
            <path
              fill="white"
              d="M92.9,36.4c0,1.3-0.6,2.6-1.6,3.5H75.5v1.2H4.8c-1.3,0-2.5-0.5-3.4-1.4c-1.9-1.9-1.9-4.9,0-6.8
		c0.9-0.9,2.1-1.4,3.4-1.4h83.3C90.7,31.6,92.9,33.7,92.9,36.4z"
            />
            <path
              fill="white"
              d="M90.6,21.4c0,2.6-2.1,4.8-4.8,4.8H48.3c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8h27.3v2.1h14.2
		C90.3,19.6,90.6,20.5,90.6,21.4z"
            />
            <path
              fill="white"
              d="M90.1,6.5c0,1-0.3,1.9-0.9,2.7H75.5v2.1h-54c-2.6-0.1-4.7-2.4-4.6-5c0.1-2.5,2.1-4.5,4.6-4.6h63.7
		C87.9,1.7,90.1,3.9,90.1,6.5C90.1,6.5,90.1,6.5,90.1,6.5z"
            />
          </g>
          <g className={style["hero__logo-kadzi"]}>
            <path
              fill="white"
              d="M127.3,63.4c0.1,2.1-0.8,4.1-2.4,5.4c-1.6,1.2-3.9,1.9-7,1.9h-9.4v-26h9.4c2.1-0.1,4.2,0.4,6,1.5
		c1.4,1.1,2.2,2.9,2.1,4.7c0,0.6-0.1,1.2-0.2,1.9c-0.1,0.6-0.3,1.2-0.6,1.8c-0.3,0.6-0.8,1.1-1.3,1.5c-0.6,0.5-1.4,0.8-2.1,0.9
		c1,0.1,2,0.3,2.9,0.8c0.7,0.4,1.3,0.9,1.7,1.5c0.4,0.6,0.7,1.3,0.8,2C127.2,62,127.3,62.7,127.3,63.4z M110.3,56.1h7
		c1.8,0.1,3.5-0.3,5.1-1.1c1.2-0.9,1.8-2.3,1.6-3.8c0.1-1.4-0.5-2.7-1.5-3.5c-1.5-0.9-3.2-1.3-4.9-1.2h-7.3L110.3,56.1z M110.3,68.8
		h7.5c4.9,0,7.4-1.8,7.4-5.4c0-0.8-0.1-1.6-0.4-2.4c-0.2-0.7-0.7-1.3-1.3-1.7c-0.7-0.5-1.6-0.8-2.4-1c-1.2-0.2-2.5-0.3-3.8-0.3h-7
		L110.3,68.8z"
            />
            <path
              fill="white"
              d="M156.3,70.7h-18.8v-26h18.1v1.9h-16.2v9.6h15.2v1.9h-15.2v10.7h16.9V70.7z"
            />
            <path
              fill="white"
              d="M187.3,70.7H185l-3.2-8.4H169c-0.5,1.3-1,2.7-1.5,4.2l-1.5,4.2h-2c0.9-2.2,1.7-4.4,2.5-6.6l2.5-6.4l2.5-6.4
		c0.8-2.2,1.7-4.3,2.5-6.6h2.7L187.3,70.7z M181.3,60.8l-6-14.5l-5.7,14.5H181.3z"
            />
            <path
              fill="white"
              d="M213.7,46.6h-9.1v24.1h-1.9V46.6h-9v-1.9h20L213.7,46.6z"
            />
            <path
              fill="white"
              d="M232.4,71.1c-1.5,0-3.1-0.2-4.6-0.6c-1.2-0.3-2.3-0.9-3.3-1.6c-0.8-0.7-1.5-1.5-2-2.5c-0.5-1-0.8-2.1-0.8-3.3
		h1.9c0.1,1,0.5,2,1.1,2.9c0.5,0.8,1.2,1.4,1.9,1.9c0.8,0.5,1.7,0.8,2.6,1c1,0.2,2.1,0.3,3.1,0.3c1,0,2.1-0.1,3.1-0.4
		c0.9-0.2,1.7-0.6,2.4-1.1c0.6-0.5,1.1-1.1,1.4-1.7c0.4-0.7,0.5-1.4,0.5-2.2c0-0.8-0.1-1.5-0.5-2.2c-0.4-0.6-0.9-1.2-1.5-1.6
		c-0.9-0.5-1.8-0.9-2.8-1.2c-1.2-0.4-2.6-0.7-4.3-1.1c-1.2-0.3-2.5-0.6-3.7-1.1c-0.9-0.3-1.8-0.8-2.5-1.4c-0.6-0.5-1.1-1.1-1.5-1.9
		c-0.3-0.8-0.5-1.6-0.5-2.5c0-1,0.2-1.9,0.6-2.8c0.4-0.8,1.1-1.6,1.8-2.2c0.8-0.6,1.8-1.1,2.8-1.4c1.2-0.3,2.4-0.5,3.6-0.5
		c1.2,0,2.5,0.1,3.6,0.5c1,0.3,2,0.7,2.9,1.3c0.8,0.6,1.5,1.3,2,2.1c0.5,0.9,0.9,1.8,1,2.9h-1.8c-0.2-0.7-0.5-1.3-0.9-1.9
		c-0.4-0.6-0.9-1.1-1.5-1.6c-0.7-0.4-1.4-0.8-2.2-1c-1-0.3-2-0.4-3-0.4c-1.9-0.1-3.7,0.3-5.3,1.3c-1.2,0.8-1.8,2.1-1.8,3.5
		c0,0.6,0.1,1.2,0.3,1.8c0.2,0.5,0.6,1,1.1,1.4c0.6,0.5,1.3,0.8,2.1,1.1c1.1,0.4,2.1,0.7,3.2,0.9l2.3,0.5c0.8,0.2,1.6,0.4,2.4,0.6
		c0.8,0.2,1.5,0.5,2.2,0.9c0.7,0.3,1.3,0.8,1.8,1.3c0.5,0.5,0.9,1.1,1.2,1.8c0.3,0.8,0.5,1.6,0.5,2.5c0,1.1-0.2,2.1-0.7,3.1
		c-0.5,0.9-1.1,1.8-1.9,2.4c-0.9,0.7-1.9,1.2-3,1.6C234.9,70.9,233.7,71.1,232.4,71.1z"
            />
          </g>
          <g className={style["hero__logo-beats"]}>
            <path
              fill="white"
              d="M109,1.4h2.1v16.4l16.8-16.4h2.8l-12.5,12.1l13.1,17.3h-2.6l-12-15.8l-5.6,5.5v10.3H109V1.4z"
            />
            <path
              fill="white"
              d="M149.5,1.4h2.4l11.4,29.3h-2.2l-3.6-9.4H144l-3.6,9.4h-2.2L149.5,1.4z M144.7,19.5h12.1l-4.4-11.6
		c-0.7-1.7-1.6-4.3-1.6-4.3h-0.1c0,0-0.8,2.5-1.5,4.3L144.7,19.5z"
            />
            <path
              fill="white"
              d="M172.4,1.4h10.2c8.5,0,12.2,6.2,12.2,14.8c0,8.6-4,14.6-12.5,14.6h-10V1.4z M182.3,28.8
		c7.1,0,10.4-4.9,10.4-12.7c0-7.8-3-12.8-10.1-12.8h-8v25.5H182.3z"
            />
            <path
              fill="white"
              d="M202,28.6l18.1-25.3V3.2h-17V1.4h19.5v2l-18.2,25.3v0.1h18.8v1.9H202V28.6z"
            />
            <path fill="white" d="M233.5,1.4h2.1v29.3h-2.1V1.4z" />
          </g>
        </svg>
      </div>
      <div className={`${style.infos} mb-7`}>
        <div>
          <h2 className="mb-2">
            Un studio d’enregistrement à Dijon pour tous vos projets
          </h2>
          <p>
            Production, maquettage, recording ... Le studio Kadzi dispose de
            tout le nécessaire pour vous accompagner dans tous vos projets. Sa
            cabine insonorisée et son matériel de qualité vous permettront
            d’avoir un rendu de qualité paré pour la distribution sur les
            plateformes de streaming.
          </p>
        </div>
        <div>
          <Slider slides={slides} />
        </div>
      </div>
      <div className={`${style.pricing} mb-7`}>
        <h2 className="mb-5">Tarifs</h2>
        <div className={style["pricing-cards"]}>
          <PricingCard
            productName="Recording"
            perHour={true}
            defaultPrice={10}
            options={recordingOptions}
          />
          <PricingCard
            options={prodsOptions}
            productName="Prods"
            perHour={false}
            hasSelect={true}
            hasToggle={true}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
