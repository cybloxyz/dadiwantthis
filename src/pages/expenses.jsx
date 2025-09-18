import React, {useEffect} from "react";
import pixsong from "../assets/sounds/pixsong.mp3";
import { useNavigate } from "react-router-dom";
import "../reason.css";
import PixelButton from "../assets/components/PixelButton";
import "../index.css";


const Expenses = () => {
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
       <div className="default-bg1 h-full pb-16">
        <div className="h-full w-full grid sm:grid-cols-5 md:grid-cols-5 grid-cols-6 sm:grid-rows-12 md:grid-rows-12 grid-rows-12 sm:gap-16 gap-6 px-10 pt-10 pb-4 sm:px-36 sm:pt-36 sm:pb-1 bg-transparent">
          
          <h1 className="minecraft-text">
            Expenses Details
          </h1>
        

          <div className="sm:col-span-5 col-span-6 sm:row-span-2 row-span-2 bg-white/80 sm:rounded-3xl rounded-2xl border backdrop-blur-lg img-hover">
            <h2 className="minecraft-p sm:px-8 pt-8 pb-2 p-3 pt-3 pb-1">
              Hotel
            </h2>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Option:
            </h3>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Horison Arcadia [Rp.380.000-]/night
            </h3>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Cooleurs [Rp.400.000-]/night
            </h3>
          </div>

          <div className="sm:col-span-5 col-span-6 sm:row-span-2 row-span-2 bg-white/80 sm:rounded-3xl rounded-2xl border backdrop-blur-lg img-hover2">
            <h2 className="minecraft-p sm:px-8 pt-8 pb-2 p-3 pt-3 pb-1">
              Eat 3x a day + Snack
            </h2>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Hotel Restaurant [Rp.50.000-]
            </h3>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Bring from Home [Rp.0-]
            </h3>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Street Food [Rp.20.000-]
            </h3>
          </div>

          <div className="sm:col-span-5 col-span-6 sm:row-span-2 row-span-2 bg-white/80 sm:rounded-3xl rounded-2xl border backdrop-blur-lg img-hover3">
            <h2 className="minecraft-p sm:px-8 pt-8 pb-2 p-3 pt-3 pb-1">
              Local Transport
            </h2>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Maxim Airport-Hotel [Rp.60.000-]
            </h3>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Maxim Hotel-Event Location [Rp.60.000-]
            </h3>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Maxim Event Location-Airport [Rp.60.000-]
            </h3>
          </div>
          
          <div className="sm:col-span-5 col-span-6 sm:row-span-2 row-span-2 bg-white/80 sm:rounded-3xl rounded-2xl border backdrop-blur-lg img-hover">
            <h2 className="minecraft-p sm:px-8 pt-8 pb-2 p-3 pt-3 pb-1">
              Notes:
            </h2>
             <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              Stipends Expectation [Rp.350.000-] *still wish it
            </h3>
             <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              My own Money [Rp.150.000-]
            </h3>
          </div>

          <div className="sm:col-span-5 col-span-6 sm:row-span-2 row-span-2 bg-white/80 sm:rounded-3xl rounded-2xl border backdrop-blur-lg img-hover">
            <h3 className="minecraft-p2 sm:px-8 pt-6 px-3 pt-1">
              Total [Rp.000-]
            </h3>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              - Stipends Expectation [-- Rp.350.000-] *i don't know it is real or not
              
            </h3>
            <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
              - My own Money [-- Rp.150.000-] *i'll use my own money for unimportant things
            </h3>
             
            <h2 className="minecraft-p sm:px-8 pt-8 pb-2 p-3 pt-3 pb-1">
              Final Total [Rp.600.000-] |
              Total + Flight [Rp.3.100.000-]
            </h2>
          </div>

        </div>

         
          <h3 className="minecraft-p2 sm:px-8 pt-1 px-3 pt-1">
            sorry dad..
          </h3>

        <PixelButton
          label="look other"
          onClick={() => navigate("/")}
       />
       </div>
    );
};

export default Expenses;