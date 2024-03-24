import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Hero.css";
import img1 from "../../Assets/E-Letter.svg";
import img2 from "../../Assets/F-Letter.svg";
import img3 from "../../Assets/E-Letter.svg";
import img4 from "../../Assets/S-Letter.svg";
import img5 from "../../Assets/T-Letter.svg";

const Hero = () => {
  return (
    <div className="h-screen">
      <Parallax pages={1} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="background_0"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="e_fest">
            {/* <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" /> */}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="background_1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="background_3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.03}>
          <div className="animation_layer parallax" id="background_2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="background_4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="ab_1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="ab_2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="ab_3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="ab_4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Hero;
