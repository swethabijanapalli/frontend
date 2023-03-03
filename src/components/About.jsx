import Banner from "./Banner";
import { Link } from "react-router-dom";

const About = () => {
  let title = "About Page";
  return (
    <div className="about">
      <Banner data={title} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="w-100 rounded-2"
              src="../images/about.jpg.webp"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div className="row my-5 ms-4">
              <h1 className=" fw-bold mt-3 mb-4">About Stories</h1>
              <p className="fw-semibold fs-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
            <div className="row ms-4">
              <div className="col-md-6 mb-5">
                <div className="block p-1 mt-2 d-flex justify-content-center align-items-center bg-light">
                  <div className="text-center">
                    <p>10</p>
                    <p>Years of Experienced</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="block p-1 mt-2 d-flex justify-content-center align-items-center bg-light">
                  <div className="text-center">
                    <p>10</p>
                    <p>Years of Experienced</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="block p-1 mt-2 d-flex justify-content-center align-items-center bg-light">
                  <div className="text-center">
                    <p>10</p>
                    <p>Years of Experienced</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="block p-1 mt-2 d-flex justify-content-center align-items-center bg-light">
                  <div className="text-center">
                    <p>10</p>
                    <p>Years of Experienced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
