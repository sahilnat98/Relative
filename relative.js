import { useState } from 'react';

export default function Relative() {
  const [rel,setre,]=useState(["Relative1","Relative2","Relative3","Relative4"])
  
  return (
    <>
     <h4>Relative List</h4>
    {
      rel.map(function(v, val) {
        return (
          <div key={val} >
          <ol start={val}>   
             
            <li>{v}</li>   
                
            </ol>
           
            </div>

        )
    })
    }
    </>
  )
}