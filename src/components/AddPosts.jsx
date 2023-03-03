import { useState } from "react";
import axios from "axios";
import Banner1 from "./Banner1";

const AddPosts = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  let addPost = (e) => {
    e.preventDefault();
    let data = { author, title, summary, image, location };
    if (author && title && image && summary && location) {
      axios
        .post("http://localhost:4000/add-posts", data)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          alert(err.data.message);
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="addPosts ">
      <Banner1 data1="Add Your Post" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 ">
            <img
              className="rounded-2"
              width="500px"
              height="650px"
              src="../images/pic8.jpeg"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h1 className="fs-1 fw-bold">Add Post</h1>
            <form action="" onSubmit={addPost}>
              <div className="Addform">
                <div className="author mb-3">
                  <p>Author</p>
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="title mb-3">
                  <p>Title</p>
                  <input
                    type="text"
                    placeholder="title of the project"
                    name="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="summary mb-3">
                  <p>Summary</p>
                  <textarea
                    type="text"
                    placeholder="Summary of the post"
                    name="summary"
                    required
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </div>
                <div className="image mb-3">
                  <p>Image</p>
                  <input
                    type="text"
                    placeholder="image of the projext"
                    name="image"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="location mb-3">
                  <p>Location</p>
                  <input
                    type="text"
                    placeholder="location of the post"
                    name="location"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <button className="btn btn-warning">Submit Post</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosts;
