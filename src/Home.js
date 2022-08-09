import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "tip end", body: "lorem10", author: "me", id: 1 },
    { title: "tip top", body: "lorem11", author: "me", id: 2 },
    { title: "tip shop", body: "lorem12", author: "shell", id: 3 },
    { title: "tip bop", body: "lorem13", author: "lee", id: 4 }
  ]);

  const [name, setName] = useState("shell");

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home p-5">
      <BlogList blogs={blogs} title="All Blogs!!" handleDelete={handleDelete} />
      <button
        onClick={() => setName("luigi")}
        className="mt-5 btn btn-danger btn-md text-white"
      >
        change name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
