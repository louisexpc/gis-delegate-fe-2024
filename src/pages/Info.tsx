import { useParams } from "react-router-dom";
import Login from "../components/Login";
import Schedule from "../components/Schedule";

const Info = () => {
  let { giscode } = useParams();
  if (giscode !== undefined) localStorage.setItem("giscode", giscode);
  //if param is set, set localStorage
  else if (localStorage.hasOwnProperty("giscode"))
    if (/^[A-Z][0-9]{5}$/.test(localStorage.getItem("giscode")!))
      //check if localStorage is set
      //check if localStorage is valid
      giscode = localStorage.getItem("giscode")!; //if valid, set giscode
    else localStorage.removeItem("giscode"); //if invalid, remove localStorage
  return giscode ? <Schedule giscode={giscode} /> : <Login />;
};

export default Info;
