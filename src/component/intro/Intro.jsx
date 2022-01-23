import "./Intro.scss"

export default function Intro() {
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
                    <h3>Full Stack <span>Developer</span></h3>
                </div>
                <a href="#protifol">
                <i className="arrow" class="fas fa-chevron-circle-down fa-3x "></i>
                </a>
            </div>
          
        </div>
    )
}
