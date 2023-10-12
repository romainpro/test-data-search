import { useState } from 'react';
import './App.css'
import Json from './MOCK_DATA.json'

function App() {
  const [searchTern ,setSearchTern]=useState('')

  
  return (
    <div>
  <input type="text" onChange={event =>{setSearchTern(event.target.value)}} placeholder="search..."   />
    {Json.filter((val)=>{
      if(searchTern == ""){
        val
      }
      else if(val.first_name.toLocaleLowerCase().includes(searchTern.toLocaleLowerCase())){
        return val
      }
    }).map((val,key)=>{
      return <div  key={key}>
        <p>
        {val.first_name} 
        </p>
      </div>;
    })}
</div>
  )
}

export default App
