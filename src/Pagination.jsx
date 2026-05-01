import { useState } from "react";
import { useEffect } from "react";


export default function Pagination (){
 const [users,setUsers]   =useState([])
 const [currentPage,setCurrentPage] =useState(1)

const itemsPerPage=10

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [currentPage]);


//  const TotalPages= Math.ceil(users.length/Itemsperpage)
//  const startingIndex= (currentPage-1)*Itemsperpage
//  const endIndex= startingIndex+Itemsperpage
//  const currentUsers = users.slice(startingIndex,endIndex)

//  const nextpage =()=>{
//     if(currentPage<TotalPages){
//         setCurrentPage(currentPage+1)
//     }
//  }

//  const prevpage =()=>{
//     if(currentPage>1){
//         setCurrentPage(currentPage-1)
//     }
//  }
 return(
    <>
    <div>
    <h1>dummy users</h1>
    <h2>page number : {currentPage}</h2>
    {users.map (user => (
      <p key={user.id}>{user.id}-{user.name}</p>
    ))}

    </div>
    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>

      <button onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </button>
   
    </>
 )

}