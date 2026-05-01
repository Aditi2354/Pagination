
import {  useState } from "react";
import { useGetPostsByPageQuery } from "./services/api";
function XYZ() {
  // const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const[cache,setCache]=useState({})
  const {data:users=[],isFetching }= useGetPostsByPageQuery(currentPage)
  // const itemsPerPage=10

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`)
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  //     // setCache((prev)=> ({
  //     //   ...prev,
  //     //   [currentPage]:data
  //     // }))
  // }, [currentPage]);

  return (
    <div>
      <h2> Pagination</h2>
      <h3>Page {currentPage}</h3>

      {users.map((user) => (
        <p key={user.id}>
          {user.id} - {user.title}
        </p>
      ))}

      {isFetching && <p>...loading</p>}

      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>

      <button onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default XYZ;