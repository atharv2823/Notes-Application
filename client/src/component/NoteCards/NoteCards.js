import React from 'react'


function NoteCards({index,title,description,category,emoji}) {

  const deleteNote = (index) => {
     const savedNote = JSON.parse(localStorage.getItem("note")) || []

     savedNote.splice(index,1)

     localStorage.setItem("note" , JSON.stringify(savedNote))

     window.location.reload()
  }
  return (
    <div>
        <div className='view-note-container'>
              <h1 className='notes-emoji'>{emoji}</h1>


             <div className='description-container'>
             <h1 className='notes-title'>{title}</h1>
             <p className='notes-description'>{description}</p>
             </div>


              <p className ={`notes-category bg-${category}`}>{category}</p>

              <img className='delete-btn' src='https://cdn-icons-png.flaticon.com/128/484/484611.png' alt='delete-icon' onClick={()=>deleteNote(index)} />
            </div>
    </div>
  )
}

export default NoteCards