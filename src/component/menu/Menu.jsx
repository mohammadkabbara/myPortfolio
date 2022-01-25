import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "  + (menuOpen && "active")}>
            <ul>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#Intro">Home</a>
                </li>


                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>


                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#protifol">Protifolio</a>
                </li>


                {/* <li onClick={()=>setMenuOpen(false)}>
                    <a href="#Testimoinals">Testimoinals</a>
                </li>


                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#work">Works</a>
                </li> */}


            </ul>
            
        </div>
    )
}
