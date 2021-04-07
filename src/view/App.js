import * as classes from "./App.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CoverPhoto from "./components/CoverPhoto";
import Card from "./components/Card";
import { CardStye } from "../core/constant";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.App}>
      <div1 data-aos="fade-down" className={classes.gridContainer}>
        <div className={classes.item1}>
          <CoverPhoto />
          <Card style={CardStye.S1} />
          <Card style={CardStye.S2} />
          <Card style={CardStye.S3} />
          <Card style={CardStye.S4} />
          <Card style={CardStye.S5} />
        </div>
      </div1>
    </div>
  );
}

export default App;
