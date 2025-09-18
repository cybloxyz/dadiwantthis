import React, {useEffect} from "react";
import pixsong from "../assets/sounds/pixsong.mp3";
import { useNavigate } from "react-router-dom";
import "../reason.css";
import PixelButton from "../assets/components/PixelButton";
import "../index.css";
import Pku from "../assets/images/pkujkt.mp4"
import Map from "../assets/images/map.png"



const Destination = () => {
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
       <div className="default-bg p-8 h-full">
          <h1 className="minecraft-text flex items-center justify-center">
            Destination
          </h1>
          <div className="bg-transparent p-8 flex justify-center items-center">
                       <video
                           src={Pku}
                           controls
                           autoPlay
                           loop
                           muted
                           className="rounded-2xl w-[600px] h-auto"
                       />
          </div>

          <div className="bg-white/50 backdrop-blur-xl sm:w-[1625px] w-[360px] sm:h-[900px] h-[250px] sm:m-16 my-3 mx-0 rounded-3xl img-hover flex justify-center items-center">
             <img className="rounded-3xl"
               src={Map}
               alt="map"
               height={2000}
               width={1800}
             />
          </div>
          <div className="flex items-end justify-center">
            <PixelButton
          label="look other"
          onClick={() => navigate("/")}
          />
          </div>
       </div>

    );
};

export default Destination;