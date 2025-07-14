import React,{useState} from "react";
function App(){
    const [text,setText]=useState('')
    const [note,setNote]=useState([])

    const handlesubmit=()=>{
        if(text.trim())
        {
          setNote([...note,text])
          setText('')
        }
        console.log(note)
    }

    const updateList=(id)=>{
      setNote(note.filter((_,index)=>index!==id))
    }
    return(
      <div>
        <h1>Notes App</h1>
        <input type='text'  value={text} onChange={(e)=>{setText(e.target.value)}}></input>
        <button onClick={handlesubmit}>Submit</button>
        <div>
        <ul>
          {note.map((value,id)=>(
            <li key={id}>{value} <button onClick={()=>updateList(id)}>Delete</button></li>
          ))}
        </ul>
        </div>
      </div>
    )
}
export default App; 