import { Carousel, Container } from "react-bootstrap";
import { useState } from "react";
import p1 from "../images/footer/1.png";
import p2 from "../images/footer/2.png";
import p3 from "../images/footer/3.png";
import p4 from "../images/footer/4.png";
import p5 from "../images/footer/5.png";
import p6 from "../images/footer/6.png";
import p7 from "../images/footer/7.png";
import p8 from "../images/footer/8.png";
import p9 from "../images/footer/9.png";
import p10 from "../images/footer/10.png";
import p11 from "../images/footer/11.png";
import closeImg from "../images/close.png";

const Footer = () => {
  const [show, setShow] = useState<boolean>(true);
  const imgs = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
  const urls = [
    "https://www.yunustw.org/",
    "https://www.cw.com.tw/",
    "https://www.tokotutor.com/",
    "https://tw.linkedin.com/",
    "https://www.sst.org.tw/",
    "https://www.veilromance.com/",
    "https://www.giftgreat.com/?lanNg=zh-TW",
    "http://www.lianteh.org.tw/front/bin/home.phtml",
    "https://www.pwc.tw/zh.html",
    "https://www2.deloitte.com/tw/tc.html",
    "https://www.grapeking.com.tw/",
  ];
  return show ? (
    <Container
      fluid
      className="tw-fixed tw-px-0 tw-py-[1vh] tw-bottom-0 tw-w-full tw-h-[10vh] tw-bg-white"
    >
      <img
        src={closeImg}
        alt=""
        className="tw-absolute tw-top-0 tw-right-[1vw] tw-h-[1vh]"
        onClick={() => setShow(false)}
      />
      <Carousel indicators={false} controls={false}>
        {imgs.map((img, index) => {
          return (
            <Carousel.Item interval={1000} key={index}>
              <a href={urls[index]}>
                <img
                  src={img}
                  alt=""
                  className="tw-block tw-max-h-[9vh] tw-max-w-full tw-m-auto"
                />
              </a>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  ) : (
    <></>
  );
};

export default Footer;
