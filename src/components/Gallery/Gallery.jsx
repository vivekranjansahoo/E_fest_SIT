import React from "react";
import "./Gallery.css";
import img1 from "../../assets/Events/BlindCoding.png";

function Gallery() {
  return (
    <div id="projects">
      <div id="photographs" className="box">
        <h1 className="sub-project">Photography</h1>
        <div className="pos_Set">
          <div
            className="slider"
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/_sumonta_saha_/")
            }
          >
            <span style={{ "--i": 1 }}>
              <img className="scales" src={img1} alt="1" />
            </span>
            <span style={{ "--i": 2 }}>
              <img className="scales" src={img1} alt="2" />
            </span>
            <span style={{ "--i": 3 }}>
              <img className="scales" src={img1} alt="2" />
            </span>
            <span style={{ "--i": 4 }}>
              <img className="scales" src={img1} alt="2" />
            </span>
            <span style={{ "--i": 5 }}>
              <img className="scales" src={img1} alt="2" />
            </span>
            <span style={{ "--i": 6 }}>
              <img className="scales" src={img1} alt="2" />
            </span>
            <span style={{ "--i": 7 }}>
              <img className="scales" src={img1} alt="2" />
            </span>
            <span style={{ "--i": 8 }}>
              <img className="scales" src={img1} alt="2" />
            </span>
            {/* Add more images */}
          </div>
        </div>

        <div className="service-lists follow">
          <button
            className="button buttonSet"
            onClick={() =>
              (window.location.href = "Section-Photo/photography.html")
            }
          >
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Load More </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
