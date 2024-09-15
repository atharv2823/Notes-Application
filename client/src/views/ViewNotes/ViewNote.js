import React, { useEffect, useState } from 'react'
import "./ViewNote.css"
import { Link} from "react-router-dom"
import NoteCards from '../../component/NoteCards/NoteCards'

function ViewNote() {

  const [viewNote,setViewNote] = useState([])

  useEffect(()=>{
    const savedNote = JSON.parse(localStorage.getItem("note")) || []
    setViewNote(savedNote)
  },[])


  return (
   <>
    <div>
      <h1 className="heading">View Notes 📙</h1>    
    </div>

    <div>
      {
        viewNote.map((notes,index)=>{
          const {title,description,category,emoji} = notes

          return (
            <NoteCards 
            index={index}
            title={title}
            description={description}
            emoji={emoji}
            category={category}/>
          )
        })
      }

    </div>



    <Link to="/">
    <img className="home-btn" src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" alt="home-button" />
    </Link>
   </>
  )
}

export default ViewNote