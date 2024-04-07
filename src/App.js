import "./App.css";
import Form from "./components/form";


function App() {
  return (
    <div className="App">
      <img
        src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1712461108/image_4_csznqc.png"
        className="img1"
      ></img>
      <img
        src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1712462084/image_1_zcd3vz.png"
        className="img2"
      ></img>
      <img
        src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1712462469/image_3_hykwlf.png"
        className="img3"
      ></img>
      <img
        src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1712463246/image_2_evzpwt.png"
        className="img4"
      ></img>
      <div className="center">
        <Form />
      </div>
    </div>
  );
}

export default App;
