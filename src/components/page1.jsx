import React from "react";
import Button from "./Button";
const Page1 = () => {
  return (
    <div className="page1 mx-4">
      <div className="text-center  mx-3  head-text text-white">
        <h1 className="mb-3">which describes you best ?</h1>
        <p className="mb-4">Thia will help us personalise your experience</p>
      </div>
      <div className="container c-page1 ">
        <Button
        
          url="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack/110/Student-3-512.png"
          text="student or soon to be enrolled"
        />
        <Button
        
          url="https://cdn-icons-png.flaticon.com/512/8496/8496122.png"
          text="professional or persuing a career"
        />
        <Button
        
          url="https://cdn-icons-png.flaticon.com/512/3048/3048150.png"
          text="parent of a school aged child"
        />
        <Button
        
          url="https://cdn-icons-png.flaticon.com/512/7057/7057760.png"
          text="life long learner"
        />
        <Button
        
          url="https://cdn-icons-png.freepik.com/512/8115/8115376.png"
          text="Teacher"
        />
      </div>
    </div>
  );
};

export default Page1;
