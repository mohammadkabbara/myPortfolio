import TopBar from "./component/topBar/TopBar";
import Contact from "./component/contact/Contact";
import Protifolio from "./component/protifolio/Protifolio";
import Testimoinals from "./component/testimoinals/Testimoinals";
import Work from "./component/work/Work";
import Intro from "./component/intro/Intro";
import "./app.scss";



function App() {
  return (
    <div className="app">

      <TopBar/>
      <div className="section">

        <Contact/>
        <Intro/>
        <Protifolio/>
        <Testimoinals/>
        <Work/>




      </div>
    </div>
  );
}

export default App;
