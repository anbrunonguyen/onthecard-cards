import * as classes from './App.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CoverPhoto from './components/CoverPhoto';
import Card from './components/Card';
import { CardStye } from '../core/constant';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.App}>
      <div data-aos='fade-down' className={classes.AppContainer}>
        <CoverPhoto />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
        <Card style={CardStye.S1} />
      </div>
    </div>
  );
}

export default App;
