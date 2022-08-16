import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource!");
          }
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
          setError(false);
        })
        .catch(err => {
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home p-5">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
