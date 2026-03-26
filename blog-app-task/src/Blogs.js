import React from "react";
import { Link } from "react-router-dom";

const blogData = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "JavaScript Tips" },
  { id: 3, title: "Full Stack Guide" },
];

function Blogs() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>📝 Blogs</h1>

      {blogData.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h3>{blog.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;