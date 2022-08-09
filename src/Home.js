import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "tip end", body: "lorem10", author: "dave", id: 1 },
    { title: "tip top", body: "lorem11", author: "luke", id: 2 },
    { title: "tip shop", body: "lorem12", author: "shell", id: 3 },
    { title: "tip bop", body: "lorem13", author: "lee", id: 4 }
  ]);

  return (
    <div className="home p-5">
      <BlogList blogs={blogs} title="All Blogs!!" />
    </div>
  );
};

export default Home;
