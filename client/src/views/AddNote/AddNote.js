import React, { useState } from "react";
import "./AddNote.css";
import EmojiPicker from "emoji-picker-react"
import {Link} from "react-router-dom"



function AddNote() {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [category,setCategory] = useState("")
  const [emoji,setEmoji] = useState("")

  const addNote = () => {
    const savedNote = JSON.parse(localStorage.getItem("note")) || []

    const noteObject = {title,description,category,emoji}

    savedNote.push(noteObject)

    localStorage.setItem("note" , JSON.stringify(savedNote))

  }

  return (
    <>
      <div className="note-body">
      <div>
        <h1 className="heading">Add Note ✍️</h1>
      </div>

      <div className="input-container">

        <input 
        className="input-box" 
        placeholder="title" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>

        <input 
        className="input-box"  placeholder="description" 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}/>

        <select 
        className="input-box input-Category" 
        value={category}
        onChange={(e)=>setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="shopping">Shopping</option>
          <option value="learning">Learning</option>
          <option value="health">Health</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="others">Others</option>
        </select>

        <input 
        className="input-box"  
        placeholder="emoji"
        value={emoji}
        onChange={(e)=>setEmoji(e.target.value)}/>

        <EmojiPicker 
        className="input-box emoji-picker " 
        height={400} 
        width={400} 
        reactionsDefaultOpen={true} 
        onEmojiClick={(emoji)=>{
          setEmoji(emoji.emoji)
          }}/>
      </div>

      <button className="add-btn" onClick={addNote}>+ Add Note</button>

      <Link to="/">
      <img className="home-btn" src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" alt="home-button" />
      </Link>
      </div>
    </>
  );
}

export default AddNote;
