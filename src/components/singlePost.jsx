import Banner from "./Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  let title = "single post";

  let [post, setPost] = useState([]);

  let params = useParams();

  useEffect(() => {
    let fetchData = async () => {
      const res = await axios.get(`http://localhost:4000/posts/${params.id}`);
      const data = await res.data;
      setPost(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="sp">
      <Banner data={title} />
      <h1>{post.title}</h1>
      <h4>{post.author}</h4>
    </div>
  );
};

export default SinglePost;
