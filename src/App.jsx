import { useState } from 'react'
import { users } from './data'
import './App.css'

function App() {
 const ItemsPerpage = 10
 const[currentpage,setCurrentPage] =useState(1)
const totalPages = Math.ceil(users.length/ItemsPerpage)

// mera pagination logic

const startingIndex= (currentpage-1)*ItemsPerpage
const endIndex = startingIndex+ ItemsPerpage

const currentUsers = users.slice(startingIndex,endIndex)

const nextPage=()=>{
  if(currentpage<totalPages) {
    setCurrentPage(currentpage+1)
  }
}

const prevPage =()=>{
  if(currentpage>1){
    setCurrentPage(currentpage-1)
  }
}
  return (
    <div style={{padding: "20px"}}>
    <h2>Pagination</h2>
    <h3>page : {currentpage}</h3>

    {/* ab mujhe users show karne hai */}
    {currentUsers.map((user)=>(
      <p key={user.id}>
      {user.id} - {user.name}
      </p>
    ))}

    <button onClick={prevPage} disabled ={currentpage==1}>
      prev
    </button>
    <button onClick={nextPage} disabled={currentpage==totalPages}>
    next
    </button>
    </div>
  )
}

export default App
