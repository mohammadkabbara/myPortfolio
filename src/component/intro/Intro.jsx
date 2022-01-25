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
                </div>
                <a href="#protifol">
                <i className="arrow" class="fas fa-chevron-circle-down fa-3x "></i>
                </a>
            </div>
          
        </div>
    )
}
