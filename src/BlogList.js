const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2 className="">{blog.title}</h2>
          <p>written by {blog.author}</p>
          <button className="blog-list-btn btn btn-md bg-primary text-white">
            Click
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
