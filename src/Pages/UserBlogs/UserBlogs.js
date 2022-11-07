import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import NewBlog from "./NewBlog";

const UserBlogs = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const addedNewBlogHandler = ({ data }) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = [data.blog, ...prevBlogs];
      return updatedBlogs;
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blogs/q?email=${user?.email}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setBlogs(data.blogs);
      });
  }, [user.email]);

  return (
    <section className="min-h-screen p-6 mb-6">
      <h2 className="text-4xl text-center font-semibold my-10">
        Wecome {user?.email}
      </h2>
      <div>
        <NewBlog onAddedNewBlog={addedNewBlogHandler} />
      </div>
      <div>
        {blogs.map((blog) => (
          <p key={blog._id}>{blog.blogTitle}</p>
        ))}
      </div>
    </section>
  );
};

export default UserBlogs;
