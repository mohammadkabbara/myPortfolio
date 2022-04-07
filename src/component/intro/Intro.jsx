import "./Intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 3000,
      backSpeed:60,
      strings: ["Full Stack Java Developer", "Full Stack Java Script Developer"],
    });
  }, []);
    return (
      <div className="begining">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L21.8,186.7C43.6,149,87,75,131,85.3C174.5,96,218,192,262,208C305.5,224,349,160,393,122.7C436.4,85,480,75,524,106.7C567.3,139,611,213,655,250.7C698.2,288,742,288,785,250.7C829.1,213,873,139,916,138.7C960,139,1004,213,1047,218.7C1090.9,224,1135,160,1178,128C1221.8,96,1265,96,1309,90.7C1352.7,85,1396,75,1418,69.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
        <div className="Intro" id="Intro">


 
            <div className="left">

                <div className="imgConatinar">
                    <img src="./assest/mohammad.jpg"/>
                </div>
            </div>
            <div className="right">

                <div className="wrapper">

                    <h2>Hi There ,I'am </h2>
                    <h1>Mohammmad Kabbara</h1>
                    <h3>
            I' am <span ref={textRef}></span>
          </h3>

      <button className="button"> Download CV</button>
                </div>
                
            </div>
          
        </div>
        <a href="#protifol">
                <i className="arrow" class="fas fa-chevron-circle-down fa-3x "></i>
                </a>
        </div>
    )
}
