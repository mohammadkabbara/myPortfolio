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
                    <h3>Full Stack Developer</h3>
                </div>
                <a href="#Protifolio">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qN_BAWaQYaMHiOeI2Ns_0oxwuoCgYNbb54-8DW87OLCatBoKyuetu266tieSqpscJBI&usqp=CAU"/>
                </a>
            </div>
          
        </div>
    )
}
