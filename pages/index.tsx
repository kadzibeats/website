import { FC } from "react";
import Header from "../components/header/Header";
import PricingCard, {
  PricingCardProps,
} from "../components/pricing-card/PricingCard";
import Slider, { SliderProps } from "../components/swiper/Swiper";
import style from "../styles/home.module.scss";
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

  const prices = [
    {
      name: "mp3",
      price: 15,
    },
    {
      name: "wav",
      price: 25,
    },
    {
      name: "multi-piste",
      price: 35,
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
      <div className={`${style.hero} mb-7`}>
        <h1 className={`mb-2 ${style.hero__title}`}>
          Studio d'enregistrement à Dijon
        </h1>
        <p className="subtitle mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
          non orci sed dictum. Nunc facilisis ac urna id vehicula. Duis eget
          consequat urna.
        </p>
        <img src="/images/voice.png" />
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
            defaultPrice={8}
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
