import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "tip end", body: "lorem10", author: "dave", id: 1 },
    { title: "tip top", body: "lorem11", author: "luke", id: 2 },
    { title: "tip shop", body: "lorem12", author: "shell", id: 3 },
    { title: "tip bop", body: "lorem13", author: "lee", id: 4 }
  ]);

  return (
    <div className="home p-5">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
            <h2 className="">{blog.title}</h2>
            <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
