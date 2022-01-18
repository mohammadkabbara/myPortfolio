import "./TopBar.scss";

export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"TopBar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">

                <a href="#Intro" className="logo">
            genius.
          </a>       

          <div className="itemContainer">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" alt="" className="icon" />

         <span>00962785902342</span>
          </div>

          <div className="itemContainer">
         <img src="https://icons-for-free.com/iconfiles/png/512/mail+icon-1320183704725127707.png" alt="" className="icon"/>

         <span>mohammadkabbara40@gmail.com</span>
          </div>
                </div>

        
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>


                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}
