import React, { useState } from 'react'
import axios from 'axios' 
const BASE_URL=process.env.REACT_APP_BASE_URL;

const Form = () => {
    const [name,setName]=useState(); //use state , used to make variable to store data
    const [kame,setKame]=useState();

    const SubmitHandler=async(e)=>{
        e.preventDefault(); // prevent page from refreshing on sucesssful query
        // console.log(name,kame)

        try{
            const res= await axios.post(`${BASE_URL}/form/v1/add`,{
                // name:name,
                // kame:kame
                name,kame
            })
            console.log(res)
        }catch(e){
            console.log(e)
        }
    }

  return (
    <div style={{width:'400px'}}>
        <form onSubmit={SubmitHandler} style={{display:'flex' , flexDirection:'column' ,alignItems:'center', height:"400px"}}>
            <label >NAME</label>
            <input type="text" placeholder='naam daalo' onChange={(e)=>setName(e.target.value)}/>
            <label >KAME</label>
            <input type="text" placeholder='kaam daalo' onChange={(e)=>setKame(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form