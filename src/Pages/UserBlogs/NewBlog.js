import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewBlog = ({ onAddedNewBlog }) => {
  const { user } = useContext(AuthContext);

  const blogSubmitHandler = (event) => {
    event.preventDefault();
    const blogForm = event.target;

    const authorName = blogForm.authorName.value;
    const authorEmail = user?.email;
    const blogTitle = blogForm.blogTitle.value;
    const publishDate = blogForm.publishDate.value;
    const blogContent = blogForm.blog.value;

    const blog = {
      authorName,
      authorEmail,
      blogTitle,
      publishDate,
      blogContent,
    };

    fetch("http://localhost:5000/api/v1/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => onAddedNewBlog(data));
  };

  return (
    <form onSubmit={blogSubmitHandler} className="p-2 max-w-xl mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Blog Author</span>
        </label>
        <input
          type="text"
          name="authorName"
          placeholder="author name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Blog Author</span>
        </label>
        <input
          type="email"
          name="authorEmail"
          placeholder="author email"
          defaultValue={user?.email}
          className="input input-bordered"
          readOnly
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Blog Title</span>
        </label>
        <input
          type="text"
          name="blogTitle"
          placeholder="blog title"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Publish Date</span>
        </label>
        <input
          type="date"
          name="publishDate"
          placeholder="publish date"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Write a Blog</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-28"
          name="blog"
          placeholder="Write blog"
        ></textarea>
      </div>

      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

export default NewBlog;
