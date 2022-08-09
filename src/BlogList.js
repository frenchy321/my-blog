const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2 className="">{blog.title}</h2>
          <p>written by {blog.author}</p>
          <button className="btn btn-md bg-primary text-white" onClick={() => handleDelete(blog.id)}>Click</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
