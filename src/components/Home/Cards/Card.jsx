import React from "react";
// import { downloadImage } from "./download-image";
// import download from "../../../assets/download.png";

export const Card = ({ img, index, openModal }) => {
  return (
    <div className="rounded-xl group relative shadow-card card">
      <img
        className="rounded-xl object-cover h-auto w-full shadow-card hover:shadow-cardhover"
        src={img}
        alt="img"
        onClick={() => {
          openModal(index);
        }}
      />
    </div>
  );
};
