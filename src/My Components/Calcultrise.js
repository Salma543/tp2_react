import React from 'react'

export default function Calcultrise() {
  const somme=()=>{
     
     let s=Number(document.getElementById("n1").value)+Number(document.getElementById('n2').value);
     document.getElementById('r').value=s;
  }
  return (
    <div>
        <h1>Calcultrise without state</h1>
      Nombre1: <input type='text' id='n1'/> &nbsp;&nbsp;
      Nombre2: <input type='text' id='n2'/> &nbsp;&nbsp;
      <input type='BUTTON' value="Somme" onClick={somme} /> &nbsp;&nbsp;
      Resultat: <input type='text' id='r'/> &nbsp;&nbsp;


    </div>
  )
}
