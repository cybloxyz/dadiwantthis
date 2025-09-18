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
import { useNavigate } from "react-router-dom";
import "../please.css";

const Dadplease = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(""); // tambahan state untuk pesan
  const [status, setStatus] = useState(""); // feedback untuk user

  const fullText = "dad i am not forcing but could you give me something please? <3";
  const fullText1 = "Hope List";
  const fullText2 = "Click the items to know each detail!";
  const [showButton, setShowButton] = useState(false);

  const images = [
    { src: money, path: "/expenses" },
    { src: ticket, path: "/ticket" },
    { src: plane, path: "/destination" },
    { src: bag, path: "/belongs" },
    { src: passport, path: "/passport" },
  ];

  const navigate = useNavigate();

  const handleClick = async () => {
    if (!name.trim()) {
      setStatus("fill name first, accept before my dad");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/xkgvledp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: "tyroarr@gmail.com",
          message: `${name} just pressed the button, it means sure! ${
            message ? `They said: "${message}"` : ""
          }`,
        }),
      });

      if (res.ok) {
        setStatus("you just sent email! ✨");
        setMessage(""); // reset input pesan
        setName(""); // reset input nama
      } else {
        setStatus("failed to send email, try again!");
      }
    } catch (error) {
      setStatus("error, try again!");
    }
  };

  useEffect(() => {
      const alreadyFinished = localStorage.getItem("textFinished");

  if (alreadyFinished) {
    setText(fullText);
    setShowButton(true);
    return; // jangan jalanin interval lagi
  }
    // ====== Background Music ======
    const bgAudio = new Audio(pixsong);
    bgAudio.volume = 0.5;
    bgAudio.loop = true;
    bgAudio.muted = false;
    bgAudio
      .play()
      .then(() => {
        bgAudio.muted = false;
      })
      .catch(() => {
        console.log("Autoplay diblokir di browser ini");
      });
     
      
    // ====== Typing Sound ======
    const typingSounds = [];
    for (let j = 0; j < 2; j++) {
      const audio = new Audio(typingSound);
      audio.volume = 0.3;
      typingSounds.push(audio);
    }

    let soundIndex = 0;
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      const sound = typingSounds[soundIndex];
      sound.currentTime = 0;
      sound.play().catch(() => {});
      soundIndex = (soundIndex + 1) % typingSounds.length;

      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setShowButton(true);
        localStorage.setItem("textFinished", "true");
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
          {/* Input Nama */}
          <div className="gap-2 flex justify-center grid grid-rows-2">
          <input
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="row-span-1 px-3 py-2 rounded-md border text-black mb-3"
          />

          {/* Input Pesan (opsional) */}
          <input
            type="text"
            placeholder="Any message? (optional)..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="row-span-1 px-3 py-2 rounded-md border text-black mb-3"
          />
         </div>

          <PixelButton label="sure!" onClick={handleClick} />
          <PixelButtonpink
            label="reason?"
            onClick={() => navigate("/reason")}
          />

          {status && (
            <p className="mt-3 text-sm text-white bg-black/40 px-3 py-1 rounded-md">
              {status}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dadplease;
