import * as classes from "./App.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CoverPhoto from "./components/CoverPhoto";
import Card from "./components/Card";
import { CardStye } from "../core/constant";
import { useEffect } from "react";

const demoData = {
  introduce: {
    title: "Giới thiệu",
    contents: [
      {
        info: "Founder HereStores.vn",
      },
      {
        info: "Founder Aboutme.vn",
      },
    ],
  },
  job: {
    title: "Nghề nghiệp",
    contents: [
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/suitcase-1-1.svg",
        info: "CEO & Founder",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/suitcase-1-1.svg",
        info: "Công ty TNHH PMC",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/work-phone.svg",
        info: "024 2222 23456",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/web-1.svg",
        info: "Aboutme.vn",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/location-1.svg",
        info: "Địa chỉ làm việc:135 Đội cấn",
      },
    ],
  },
  contact: {
    title: "Thông tin liên lạc",
    contents: [
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/phone-3.svg",
        info: "0989 825 568",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/phone-3.svg",
        info: "0889 682 289",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/mail-1-1.svg",
        info: "ducanh3010@gmail.com",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/mail-1-1.svg",
        info: "Zalo: 0989825568",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/zalo-1.svg",
        info: "Facebook: mr.heo3010",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/insta-1.svg",
        info: "Instagram: ducanh3010",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/linkedin.svg",
        info: "Linkedin",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/viber-1.svg",
        info: "Viber: 0889682289",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/whatsapp.svg",
        info: "Whatsapp: 0989 825 568",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/wechat.svg",
        info: "Wechat",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/telegram.svg",
        info: "Telegram",
      },
    ],
  },
  payment: {
    title: "Thanh toán",
    contents: [
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/bank-account.svg",
        info: "Tài khoản ngân hàng",
      },
      {
        icon: null,
        info: "Thông tin tài khoản ngân hàng",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/momo.svg",
        info: "Ví điện tử momo",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/viettel-pay-1.svg",
        info: "Viettel Pay",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/zalo-pay.svg",
        info: "Zalo Pay",
      },
    ],
  },
  infor: {
    title: "Thông tin cá nhân",
    contents: [
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/birthday.svg",
        info: "Ngày sinh: 30/10/1995",
      },
      {
        icon: "https://aboutme.vn/wp-content/uploads/2021/01/location.svg",
        info: "Nơi ở: 31 Phủ Liễn",
      },
    ],
  },
};
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.App}>
      <div1 data-aos="fade-down" className={classes.gridContainer}>
        <div className={classes.item1}>
          <CoverPhoto />
          <Card style={CardStye.S1} data={demoData} />
        </div>
      </div1>
    </div>
  );
}

export default App;
