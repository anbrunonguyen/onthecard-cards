import * as classes from './App.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CoverPhoto from './components/CoverPhoto';
import Card from './components/Card';
import { CardStye } from '../core/constant';
import { useEffect, useState } from 'react';
import { AOSAnimation } from '../core/constant';

const demoDatas = [
  {
    title: 'Giới thiệu',
    contents: [
      { icon: null, info: 'Founder HereStores.vn' },
      { icon: null, info: 'Founder Aboutme.vn' },
    ],
  },
  {
    title: 'Nghề nghiệp',
    contents: [
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/suitcase-1-1.svg',
        info: 'CEO & Founder',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/suitcase-1-1.svg',
        info: 'Công ty TNHH PMC',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/work-phone.svg',
        info: '024 2222 23456',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/web-1.svg',
        info: 'Aboutme.vn',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/location-1.svg',
        info: 'Địa chỉ làm việc:135 Đội cấn',
      },
    ],
  },
  {
    title: 'Thông tin liên lạc',
    contents: [
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/phone-3.svg',
        info: '0989 825 568',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/phone-3.svg',
        info: '0889 682 289',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/mail-1-1.svg',
        info: 'ducanh3010@gmail.com',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/zalo-1.svg',
        info: 'Zalo: 0989825568',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/fb.svg',
        info: 'Facebook: mr.heo3010',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/insta-1.svg',
        info: 'Instagram: ducanh3010',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/linkedin.svg',
        info: 'Linkedin',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/viber-1.svg',
        info: 'Viber: 0889682289',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/whatsapp.svg',
        info: 'Whatsapp: 0989 825 568',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/wechat.svg',
        info: 'Wechat',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/telegram.svg',
        info: 'Telegram',
      },
    ],
  },
  {
    title: 'Thanh toán',
    contents: [
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/bank-account.svg',
        info: 'Tài khoản ngân hàng',
      },
      {
        icon: null,
        info: 'Thông tin tài khoản ngân hàng',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/momo.svg',
        info: 'Ví điện tử momo',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/viettel-pay-1.svg',
        info: 'Viettel Pay',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/zalo-pay.svg',
        info: 'Zalo Pay',
      },
    ],
  },
  {
    title: 'Thông tin cá nhân',
    contents: [
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/birthday.svg',
        info: 'Ngày sinh: 30/10/1995',
      },
      {
        icon: 'https://aboutme.vn/wp-content/uploads/2021/01/location.svg',
        info: 'Nơi ở: 31 Phủ Liễn',
      },
    ],
  },
];
function App() {
  const [style, setStyle] = useState(CardStye.S1);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.App}>
      <div data-aos={AOSAnimation.fadeDown} className={classes.gridContainer}>
        {style !== CardStye.special ? (
          <div className={classes.item1}>
            <CoverPhoto />
            {demoDatas.map((data, i) => (
              <Card style={style} data={data} key={`card_${i}`} />
            ))}
          </div>
        ) : (
          <div className={classes.item1}>
            <Card style={style} data={demoDatas} />
          </div>
        )}
        <h3>Change style here</h3>
        <ul className={classes.ul_active}>
          <li onClick={() => setStyle(CardStye.S1)}>1</li>
          <li onClick={() => setStyle(CardStye.S2)}>2</li>
          <li onClick={() => setStyle(CardStye.special)}>S</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
