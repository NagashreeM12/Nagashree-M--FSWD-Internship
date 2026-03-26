import React from "react";
import { useParams } from "react-router-dom";

const blogData = [
  { id: 1, title: "React Basics", content: "This is React basics blog..." },
  { id: 2, title: "JavaScript Tips", content: "This is JS tips blog..." },
  { id: 3, title: "Full Stack Guide", content: "This is Full Stack blog..." },
];

function BlogDetails() {
  const { id } = useParams();

  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;