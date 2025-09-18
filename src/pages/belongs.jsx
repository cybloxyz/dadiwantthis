import React, { useEffect } from "react";
import PixelButton from "../assets/components/PixelButton";
import PixelButtonpink from "../assets/components/Pixelbuttonpink";
import money from "../assets/images/money.png";
import glasses from "../assets/images/glasses.png";
import head from "../assets/images/headphones.png";
import watch from "../assets/images/watch.png";
import Usb from "../assets/images/usb.png";
import pixsong from "../assets/sounds/pixsong.mp3";
import "../../Minecraft_Regular/stylesheet.css";
import PixelCarr from "../assets/components/carr";
import { useNavigate, Link } from "react-router-dom";
import "../please.css";

const Belongs = () => {
  const fullText1 = "this is what i need to go there! (few things)";
  const fullText2 = "i have some but dont have some other";
  const images = [
  {
    src: money,
    description: `umm.. of course this is very important
    (i do not have this)`
  },
  {
    src: Usb,
    description: `umm.. i have this, but full
    (yours look more interesting)`
  },
  {
    src: glasses,
    description: `my eyes hurt sometimes
(mine is broken)`
  },
  {
    src: head,
    description: `to reduce noise
(mine is broken, separated 2!)`
  },
  {
    src: watch,
    description: `so I will not forget time
    (it's not too important)`
  }
];

  const navigate = useNavigate();

  useEffect(() => {
      const bgAudio = new Audio(pixsong);
      bgAudio.volume = 0.3;
      bgAudio.loop = true;
      bgAudio.play().catch(() => {
      console.log("Autoplay diblokir di browser ini");
      });
  
  
      return () => {
      bgAudio.pause();
      bgAudio.currentTime = 0; 
       };
      }, []);

  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(180deg, #cddafd, #d2deffff, #ffc1d8ff, #ffc8dd, #ffc8dd, #cdb4db)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 className="dadplease-subsub">{fullText1}</h1>
      <h1 className="dadplease-subtitle">{fullText2}</h1>

      <PixelCarr images={images} />

     <PixelButton
            label="go back"
            onClick={() => navigate("/")}
      />  
    </div>
  );
};

export default Belongs;