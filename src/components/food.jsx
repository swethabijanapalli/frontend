import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Food = () => {
  let title = "All Posts";

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let res = await axios.get("http://localhost:4000/posts");
      let data = await res.data;
      setPosts(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="posts">
      <Banner data={title} />
      <div className="posts_list">
        {posts.map((data) => (
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      className="rounded-1"
                      width="250px"
                      height="350px"
                      src={data.image}
                      alt=""
                    />
                    <div className="p-1 mt-2 d-flex justify-content-between">
                      <p>Dessert</p>
                      <p>March 01,2022</p>
                    </div>
                    <Link
                      to={`/home/posts/${data._id}`}
                      className="text-warning text-decoration-none"
                    >
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga quos magni unde magnam vitae nihil facilis labore hic
                      porro delectus perferendis vero aspernatur, voluptatibus
                      totam a velit voluptate incidunt mollitia.
                    </p>
                  </div>
                  <div className="sidebar-box p-4">
                    <input type="text" placeholder="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
