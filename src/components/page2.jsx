import React, { useState } from "react";
import Button from "./Button";

const Page2 = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  return (
    <div className="page-2">
      <div className="text-center  mx-3 head-text text-white">
        <h1>Which are you most interested in?</h1>
        <p className="mb-2">
          Choose just one. This will help us get started (but you won't limit
          your experience).
        </p>
      </div>
      <div className="container c-page1 ">
        <Button
          url="https://www.svgrepo.com/show/283613/line-chart-line-graph.svg"
          text="learning specific skills "
          isActive={activeButton === "learning specific skills "}
          handleClick={() => handleClick("learning specific skills ")}
        />
        <Button
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Earth.svg/2064px-Earth.svg.png"
          text="Exploring new topics I'm intrested in"
          isActive={activeButton === "Exploring new topics I'm intrested in"}
          handleClick={() => handleClick("Exploring new topics I'm intrested in")}
        />
        <Button
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Satellite_of_GDAL.svg/1200px-Satellite_of_GDAL.svg.png"
          text="Refreshing My math foundation"
          isActive={activeButton === "Refreshing My math foundation"}
          handleClick={() => handleClick("Refreshing My math foundation")}
        />
        <Button
          url="https://uxwing.com/wp-content/themes/uxwing/download/seo-marketing/target-icon.png"
          text="Excersicing my brain to stay sharp"
          isActive={activeButton === "Excercising my brain to stay sharp"}
          handleClick={() => handleClick("Excercising my brain to stay sharp")}
        />
        <Button
        url="https://b.kisscc0.com/20180705/zhe/kisscc0-eye-download-computer-icons-drawing-cartoon-eyes-5b3e1f8c3ee8d9.1273474715307979642577.png"
        text="something else"
        isActive={activeButton === "something else"}
        handleClick={() => handleClick("something else")}
      />
      </div>
    </div>
  );
};

export default Page2;
