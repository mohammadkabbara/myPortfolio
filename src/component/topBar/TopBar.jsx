import "./TopBar.scss";

export default function TopBar() {
    return (
        <div className="TopBar">
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
         <img src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Mail-icon-by-ahlangraphic-55-580x386.jpg" alt="" className="icon"/>

         <span>mohammadkabbara40@gmail.com</span>
          </div>
                </div>

        
                <div className="right">

                   
                </div>
            </div>
        </div>
    )
}
