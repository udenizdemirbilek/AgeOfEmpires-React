import React from "react";
import { Image } from "react-bootstrap";
import age4 from "../../images/age4.jpg";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="container">
        <Image
            src={age4}
            alt="Age Of Empires 4 Logo"
        />
      </div>
    </div>
  );
}

export default Home;
