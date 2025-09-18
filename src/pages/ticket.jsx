import React, {useEffect} from "react";
import pixsong from "../assets/sounds/pixsong.mp3";
import { useNavigate } from "react-router-dom";
import "../reason.css";
import PixelButton from "../assets/components/PixelButton";
import "../reason.css";
import go from "../assets/images/go.png";
import back from "../assets/images/back.png";


const Ticket = () => {
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
        <div className="default-bg1"
        >
       <h1 className="reason-paragraph mt-6">go ticket between Rp.950.000- to Rp.1.000.000</h1> 
       < img className="img-hover m-8"
         src={go}
         alt="go to jakarta"
       /> 
       <h1 className="reason-paragraph">go ticket between Rp.1.000.000 to Rp.1.500.000-</h1> 
       < img className="img-hover"
         src={back}
         alt="back from jakarta"
       />   
        <h1 className="reason-title">Estimated Flight total is Rp.2.500.000-</h1>
        <h1 className="reason-paragraph">dad, i don't know is there any stipends or not :)</h1>
       <PixelButton
            label="look other"
            onClick={() => navigate("/")}
      />  
        </div>
    );
};

export default Ticket;