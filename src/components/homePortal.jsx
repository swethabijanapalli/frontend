import Navbar from "./navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./FoodieHome";
import About from "./About";
import AddPosts from "./AddPosts";
import Food from "./food";
import SinglePost from "./singlePost";

const HomePortal = () => {
  return (
    <div className="HomePortal">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Food />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/add-posts" element={<AddPosts />} />
      </Routes>
    </div>
  );
};

export default HomePortal;
