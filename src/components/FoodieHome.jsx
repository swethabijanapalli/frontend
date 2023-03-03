import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="d-flex justify-content-center aligin-item-center mx-5 mt-3 mb-5">
        <img className="w-100" src="../images/pic5.avif" alt="" />
        <div className="bg-warning p-1">
          <h3 className="subheading text-secondary mx-4 mt-5 mb-3">
            FEATURED POSTS
          </h3>
          <h1 className="mx-4 mb-3 fw-bold ">
            Love the delicious & <br /> tasty food
          </h1>
          <p className="fs-5 text-secondary ms-4 me-2 mt-4 mb-4">
            A small river named Duden flows by their place and supplies <br />
            it with the necessary reglialia
          </p>
          <Link className="btn btn-dark ms-4 px-2 px-md-3 py-2">Add Post</Link>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row mb-3">
          <h1>Recent Stories</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row ">
              <div className="col-md-6 mb-5">
                <img
                  className="rounded-1"
                  width="250px"
                  height="200px"
                  src="../images/pic1.avif"
                  alt=""
                />
                <div className="p-1 mt-2 d-flex justify-content-between">
                  <p>Dessert</p>
                  <p>March 01,2022</p>
                </div>
                <h5>
                  <Link className=" text-dark text-decoration-none">
                    Tasty & Delicious Foods
                  </Link>
                </h5>
                <Link className="text-warning text-decoration-none">
                  Read More
                </Link>
              </div>
              <div className="col-md-6 ">
                <img
                  className="rounded-1"
                  width="250px"
                  height="200px"
                  src="../images/pic2.avif"
                  alt=""
                />
                <div className="p-1 mt-2 d-flex justify-content-between">
                  <p>Dessert</p>
                  <p>March 01,2022</p>
                </div>
                <h5>
                  <Link className=" text-dark text-decoration-none">
                    Tasty & Delicious Foods
                  </Link>
                </h5>
                <Link className="text-warning text-decoration-none">
                  Read More
                </Link>
              </div>
              <div className="col-md-6 ">
                <img
                  className="rounded-1"
                  width="250px"
                  height="200px"
                  src="../images/pic6.avif"
                  alt=""
                />
                <div className="p-1 mt-2 d-flex justify-content-between">
                  <p>Dessert</p>
                  <p>March 01,2022</p>
                </div>
                <h5>
                  <Link className=" text-dark text-decoration-none">
                    Tasty & Delicious Foods
                  </Link>
                </h5>
                <Link className="text-warning text-decoration-none">
                  Read More
                </Link>
              </div>
              <div className="col-md-6 ">
                <img
                  className="rounded-1"
                  width="250px"
                  height="200px"
                  src="../images/pic4.avif"
                  alt=""
                />
                <div className="p-1 mt-2 d-flex justify-content-between">
                  <p>Dessert</p>
                  <p>March 01,2022</p>
                </div>
                <h5>
                  <Link className=" text-dark text-decoration-none">
                    Tasty & Delicious Foods
                  </Link>
                </h5>
                <Link className="text-warning text-decoration-none">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img className="w-100 rounded-2" src="../images/pic3.avif" alt="" />
            {/* <p>FOOD</p>
            <h4>Tasty & Delicious Foods</h4> */}
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <h3>Featured Posts</h3>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img
                  className="rounded-1"
                  width="250px"
                  height="350px"
                  src="../images/pic1.avif"
                  alt=""
                />
                <div className="p-1 mt-2 d-flex justify-content-between">
                  <p>Dessert</p>
                  <p>March 01,2022</p>
                </div>
                <h5>
                  <Link className=" text-dark text-decoration-none">
                    Tasty & Delicious Foods
                  </Link>
                </h5>
                <Link className="text-warning text-decoration-none">
                  Read More
                </Link>
              </div>
              <div className="col-md-4">
                <img
                  className="rounded-1"
                  width="250px"
                  height="350px"
                  src="../images/pic1.avif"
                  alt=""
                />
                <div className="p-1 mt-2 d-flex justify-content-between">
                  <p>Dessert</p>
                  <p>March 01,2022</p>
                </div>
                <h5>
                  <Link className=" text-dark text-decoration-none">
                    Tasty & Delicious Foods
                  </Link>
                </h5>
                <Link className="text-warning text-decoration-none">
                  Read More
                </Link>
              </div>
              <div className="col-md-4">
                <img
                  className="rounded-1"
                  width="250px"
                  height="350px"
                  src="../images/pic1.avif"
                  alt=""
                />
                <div className="p-1 mt-2 d-flex justify-content-between">
                  <p>Dessert</p>
                  <p>March 01,2022</p>
                </div>
                <h5>
                  <Link className=" text-dark text-decoration-none">
                    Tasty & Delicious Foods
                  </Link>
                </h5>
                <Link className="text-warning text-decoration-none">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="sidebar-wrap text-center">
              <div className="sidebar-box p-4">
                <p className="fw-bold fs-4">About Me</p>
                <img src="" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  quos magni unde magnam vitae nihil facilis labore hic porro
                  delectus perferendis vero aspernatur, voluptatibus totam a
                  velit voluptate incidunt mollitia.
                </p>
              </div>
              <div className="sidebar-box p-4">
                <input type="text" placeholder="search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
