/* eslint-disable no-unused-vars */
import React from "react";
import Sol from "../../components/Sol";
import Collaboration from "../../components/Collaboration";

const AboutCoin = () => {
  return (
    <div className="flex flex-col gap-8">
      <Collaboration />
      <Sol />
    </div>
  );
};

export default AboutCoin;
