import * as classes from './App.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CoverPhoto from './components/CoverPhoto';
import Card from './components/Card';
import { CardStye } from '../core/constant';
import { useEffect } from 'react';

const demoData = {
  title: 'Nghề nghiệp',
  contents: [
    {
      icon: 'https://aboutme.vn/wp-content/uploads/2021/01/suitcase-1-1.svg',
      info: 'CEO & Founder',
    },
    {
      icon: 'https://aboutme.vn/wp-content/uploads/2021/01/suitcase-1-1.svg',
      info: 'ABC',
    },
  ],
};
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.App}>
      <div1 data-aos='fade-down' className={classes.gridContainer}>
        <div className={classes.item1}>
          <CoverPhoto />
          <Card style={CardStye.S1} data={demoData} />
        </div>
      </div1>
    </div>
  );
}

export default App;
