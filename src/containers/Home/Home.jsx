import React from "react";
import { Image } from "react-bootstrap";
import ageOfWork from "../../images/ageOfWork.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="container">
        <Image
          src={ageOfWork}
          alt="Age Of Empires 2 backdrop"
          className="homeImage"
        />
      </div>
    </div>
  );
}

export default Home;
