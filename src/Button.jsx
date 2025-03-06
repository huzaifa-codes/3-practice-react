import React from 'react'


 function Button({name , brown}) {
   
    
  return (
    <div >
     <button style={{
        backgroundColor : name
     }}>click</button>
     <button style={{
        backgroundColor : brown
     }}>han</button>
     <button>han</button>
     <button>han</button>

    </div>
  )
}


export default Button


