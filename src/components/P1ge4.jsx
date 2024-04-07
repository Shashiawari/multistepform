import React from "react";

const Page4 = () => {
  return (
    <div className="page4">
      <div className="contaniner page4 text-center text-white">
        <h1>Whats Your Maths Comfort Level?</h1>
        <p>
          choose highest level you are confident in-you can always adjust later.
        </p>
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6 my-3">
            <div className="card p-5 text-center">
              <img src="https://images.saymedia-content.com/.image/t_share/MTk3NzM1NzMyNTE1ODQxODQy/how-to-add-subtract-multiply-and-divide-fractions.jpg" className="img-fluid"></img>
              <h1>Arthematic</h1>
              <p>introductory</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="card p-5 text-center">
              <img src="https://i.ytimg.com/vi/88uavKrcwc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVY7U5nnO21TqZ40rlkV9my0bcmQ" className="img-fluid"></img>
              <h1 className="mt-5">Basic Algebra</h1>
              <p>Foundational</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="card p-5 text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Quadratic_formula.svg/2560px-Quadratic_formula.svg.png" className="img-fluid mb-5"></img>
              <h1 className="mt-4">Intermediate Algebra</h1>
              <p>Intermediate</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="card p-5 text-center">
              <img src="https://c1encia.wordpress.com/wp-content/uploads/2019/06/int001.png" className="img-fluid"></img>
              <h1 className="mt-2">calculus</h1>
              <p>Advanced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
