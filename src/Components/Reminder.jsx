import React,{useState} from 'react'
import './Reminder.css'

function Reminder() {


    const [reminder,setReminder]=useState([])
    const [newReminder,setNewReminder]=useState("")
    const handleInput=(event)=>{
        setNewReminder(event.target.value)
        
          
    }
    const handleSubmit=()=>{
       if(newReminder.trim()){
        setReminder([...reminder,newReminder])
        setNewReminder("")
       }
       
    }
    const handleDelete=(index)=>{
        setReminder(reminder.filter((item,itemIndex)=>itemIndex!==index))

    }
  return (
    <div className='container'>
        <h1>Reminder App</h1>

        <div className="input-container">
            <input type="text" 
            placeholder='Enter a Reminder'
            value={newReminder}
            onChange={handleInput}
            />
            <button className='btn-add' onClick={handleSubmit}>
                Add Reminder
            </button>
        </div>
        {
            reminder.length > 0 ?(
                <ul className="remider-list">
            {
                
                 reminder.map((reminder,index)=>(
                     <li key={index}>
                        <div className="reminder">
                           {reminder}
                        </div>
                       
                           <button className='btn-delete' onClick={()=>handleDelete(index)}>Delete</button>
                     
                        
                    </li>
                 ))
            }
            </ul>
                
            ):(
                <ul className="remider-list">
                   <p>No Remiders found </p>
                </ul>
        )}
    </div>
  )
}

export default Reminder