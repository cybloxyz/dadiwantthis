import React, { useState, useEffect } from "react";
import PixelButton from "../assets/components/PixelButton";
import PixelButtonpink from "../assets/components/Pixelbuttonpink";
import bag from "../assets/images/bag.png";
import money from "../assets/images/money.png";
import passport from "../assets/images/passport.png";
import plane from "../assets/images/plane.png";
import ticket from "../assets/images/ticket.png";
import typingSound from "../assets/sounds/typingcut.mp3";
import pixsong from "../assets/sounds/pixsong.mp3";
import "../../Minecraft_Regular/stylesheet.css";
import PixelCarr from "../assets/components/carr";
import { useNavigate, Link } from "react-router-dom";
import "../please.css";

const Dadplease = () => {
  const [text, setText] = useState("");
  const fullText = "i am not forcing but could you give me something please? <3";
  const fullText1 = "Hope List";
  const fullText2 = "Click the items to know each detail!";
  const [showButton, setShowButton] = useState(false);
  const images = [
    {src: money, path: "/expenses"},
    {src: ticket, path: "/ticket"},
    {src: plane, path: "/destination"},
    {src: bag, path: "/belongs"},
    {src: passport, path: "/passport"}
  ];
  const navigate = useNavigate();

  useEffect(() => {
    // ====== Background Music ======
    const bgAudio = new Audio(pixsong);
    bgAudio.volume = 0.5;
    bgAudio.loop = true;
    bgAudio.muted = false; // autoplay diizinkan karena muted
    bgAudio.play().then(() => {
      // segera unmute setelah play berhasil
      bgAudio.muted = false;
    }).catch(() => {
      console.log("Autoplay diblokir di browser ini");
    });

    // ====== Typing Sound ======
 const typingSounds = []; // array untuk preloaded audio
for (let j = 0; j < 2; j++) {
  const audio = new Audio(typingSound);
  audio.volume = 0.3;
  typingSounds.push(audio);
}

let soundIndex = 0;
let i = 0;
const interval = setInterval(() => {
  setText(fullText.slice(0, i + 1));

  // mainkan audio typing dari pool
  const sound = typingSounds[soundIndex];
  sound.currentTime = 0;
  sound.play().catch(() => {});
  soundIndex = (soundIndex + 1) % typingSounds.length;

  i++;
  if (i === fullText.length) {
    clearInterval(interval);
    setShowButton(true);
  }
   
}, 80);


    return () => {
      clearInterval(interval);
      bgAudio.pause();
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
      <h1 className="dadplease-title">{fullText1}</h1>
      <h1 className="dadplease-subtitle">{fullText2}</h1>

      <PixelCarr images={images} />
      
      <h1 className="dadplease-typing">{text}</h1>

     {showButton && (
    <div
    style={{
      opacity: showButton ? 1 : 0,
      transform: showButton ? "scale(1)" : "scale(0.5)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}
   >
    <PixelButton
      label="sure!"
      onClick={() => alert("thank you<3 buttons still in progress..")}
    />
     <PixelButtonpink
      label="reason?"
      onClick={() => navigate("/reason")}
    />
    </div>
    )}

    </div>
  );
};

export default Dadplease;