import React, { useState } from 'react'
import './Stylecomp3.css';
import im from './tp1.png'
// declaraton propse

export default function Comp2({gr ,msg , fparent}) {
  // declaration une setate counter
  const [counter, setcounter ]=useState(10);
  //declaration la metode incremeent
  const inc=()=>{
    let c=counter;
    c++;
    setcounter(c);
  }
  const moin=()=>{
    let c=counter;
    c--;
    setcounter(c);
  }
 // declare setet nom
 const [nom,setnom]=useState("");
const modifierNom=(e)=>{
    setnom(e.target.value);
    
}
    const fchild=()=>{
        alert("hello from child")
    }
  //declaration setate table
  const[test,settest]=useState([])

  return (
   <div>
    {/* chaque appele la compsent change le titre */}
     <h1 style={{color:'red' , textDecoration:'underline'}}
     onClick={()=>fparent(10)}>{msg}{gr}</h1>
      <h2 className='c' onClick={fchild}> test </h2>
    {/*<img src={im}></img>*/}
    <img src={'https://tse2.mm.bing.net/th?id=OIP.E5XRsXOXAY5pFnhMKDoU8gHaEo&pid=Api&P=0&h=180'}></img>
  
  <hr></hr>
  <input type='button' value='-' onClick={moin} />
    la valeur du state counter est {counter}
  <input type='button' value='+' onClick={inc}/>
  <hr></hr>
  <br></br>
   votre nom: <input type='text' onChange={(e)=>modifierNom(e)} value={nom}/>
   

     afficher table
     <table>
        <tr>
          <td>nom</td><td></td>
        </tr>
     </table>
   </div>
  )
}
//component class utiliser rcc
//component function rfc
