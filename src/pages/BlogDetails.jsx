import { Link, useParams } from "react-router-dom";
import { useFetch } from "../components/UseFecth";

const BlogDetails = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error Page</p>;

  return (
    <>
      <div className="container">
        <h1 className="text-center">{data.title}</h1>
        <br />
        <p className="text-justify mb-4 fs-4">{data.body}</p>
        <Link to="/Blog" className="btn btn-primary mb-4">Volver a Blog</Link>
      </div>
    </>
  );
};
export default BlogDetails;
