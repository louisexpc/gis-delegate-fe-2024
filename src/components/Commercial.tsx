import p1 from "../images/modal/1.png";
import p2 from "../images/modal/2.png";
import p3 from "../images/modal/3.png";
import p4 from "../images/modal/4.png";
import p5 from "../images/modal/5.png";
import p6 from "../images/modal/6.png";

interface CommercialProps {
  rand: number;
}

const Commercial = ({ rand }: CommercialProps) => {
  const imgs = [p1, p2, p3, p4, p5, p6];
  const urls = [
    "#",
    "#",
    "https://lihi1.com/2AoUT",
    "https://www.myscheming.com.tw/v2/official/SalePageCategory/460780?sortMode=Curator",
    "https://www.myscheming.com.tw/v2/official/SalePageCategory/460780?sortMode=Curator",
    "https://www.enchantee.com.tw/wedding-box/?gclid=CjwKCAiAleOeBhBdEiwAfgmXf6X_wTt-fu-kuoEr7EJ1x7DW--I4IycxiRreZoZo9v3Mvpts1mE6JxoCWlYQAvD_BwE",
  ];

  return (
    <a href={urls[rand]}>
      <img src={imgs[rand]} alt="" className="mimg" />
    </a>
  );
};

export default Commercial;
