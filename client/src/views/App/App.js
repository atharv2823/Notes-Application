import React from "react";
import "./App.css";
import Card from "../../component/Card/Card";
import {Link} from "react-router-dom"

const data = [
  {
    cardImage:"https://cdn-icons-png.flaticon.com/128/4744/4744315.png",
    cardDescription:"Notes will be saved securely in your browser's local storage."
  },
  {
    cardImage:"https://cdn-icons-png.flaticon.com/128/1491/1491165.png",
    cardDescription:"Use your brain for thinking, not for remembering things."
  },
  {
    cardImage:"https://cdn-icons-png.flaticon.com/128/1029/1029132.png",
    cardDescription:"Loved by 100+ user. Feedbacks are always welcomme!."
  }
]

function App() {
  return (
    <>
      <div>
        <h1 className="heading">Quick Note 📒</h1>
        <h3 className="sub-heading">
          <span className="sub-heading-heighlight">
            Why remember everything ?
          </span>{" "}
          When you have a pocket friendly note taking app.
        </h3>
      </div>

      <div>
        <h1 className="heading">Why you should use Quick Note?</h1>
        

       <div className="feature-container">
       {
          data.map((feature)=>{
            const {cardImage,cardDescription} = feature

            return (
              <Card 
              cardImage={cardImage} 
              cardDescription={cardDescription}
              />
            )
          })
        }
       </div>
      </div>


      <div className="btn-container">
       <Link to="/add-note"> 
       <button className="btn btn-add" type="button">Add Notes ✍️</button>
       </Link>

       <Link to="/view-note">
       <button className="btn btn-display"  type="button">View Notes 📙</button>
       </Link>

       
        
      </div>
    </>
  );
}

export default App;
