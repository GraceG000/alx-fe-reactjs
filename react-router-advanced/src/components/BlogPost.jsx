import { useParams } from "react-router-dom";

function BlogPost() {

  const { id } = useParams();

  return (
    <>
      <h1>Blog Post</h1>
      <p>Post ID: {id}</p>
    </>
  )
}

export default BlogPost;