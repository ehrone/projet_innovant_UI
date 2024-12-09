import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export const NavBar = () => {
  return (
    <div className="customHeader">
      <div >
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      <div className="header">
        <h2 className="site-title">SKINTHESIS</h2>
        
        <div className="navBar">
          <Link to="/">Home</Link>
          <Link to="/testOurModel">Test our model</Link>
          <Link to="/aboutUs">About us</Link>
        </div>
      </div>
    </div>
  );
};
