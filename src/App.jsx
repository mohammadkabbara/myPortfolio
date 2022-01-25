import TopBar from "./component/topBar/TopBar";
import Contact from "./component/contact/Contact";
import Protifolio from "./component/protifolio/Protifolio";
import Testimoinals from "./component/testimoinals/Testimoinals";
import Work from "./component/work/Work";
import Intro from "./component/intro/Intro";
import Menu from "./component/menu/Menu";


import "./app.scss";
import { useState } from "react";



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

     
      <div className="section">
        <Intro/>
        <Contact/>
        {/* <Protifolio/>
        <Testimoinals/>
        <Work/> */}




      </div>
    </div>
  );
}

export default App;
