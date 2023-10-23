import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../components/UseFecth";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error data...</p>;

  const handleChange = (e) => {
    let filter = e.target.value;

    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };
  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        name=""
        onChange={handleChange}
        value={searchParams.get("filter") || ""}
        className="form-control my-3"
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((dato) => {
            return (
              <Link
                to={`/blog/${dato.id}`}
                key={dato.id}
                className="list-group-item text-justify"
              >
                {dato.id} - {dato.title}
              </Link>
            );
          })}
      </ul>
    </>
  );
};
export default Blog;
