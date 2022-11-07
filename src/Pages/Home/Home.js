import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { data } = useLoaderData();
  const blogs = data.blogs;

  return (
    <section className="min-h-screen p-6 mb-6">
      <h2 className="text-4xl text-center font-semibold my-10">
        Wecome to the Home Page
      </h2>
      <div>
        {blogs.map((blog) => (
          <p key={blog._id}>{blog.blogTitle}</p>
        ))}
      </div>
    </section>
  );
};

export default Home;
