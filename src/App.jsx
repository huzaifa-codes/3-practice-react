import React, { useState } from 'react'
import Card from './olx-card'
import Navbar from './navbar'

export default function App() {
  let [show , setShow] = useState(true)
  return (
    <>
  <Navbar/>
<button style={{
  marginBottom : '30px',
  backgroundColor : '#111',
  color : 'white',
  width : '140px',
  height : '50px',
 textAlign : 'center',
 marginLeft : '650px',
 borderRadius : '30PX'
  
}} onClick={()=>setShow(!show)}>{show === true ? 'show' : 'hide'} </button>
    <div>{show === true ? <div style={{
      display : 'flex',
      justifyContent : 'center',
      gap : '40px',
      flexWrap : 'wrap',
    }}> <Card  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQs5SuJswTHraGukm5JhHdXkHJirpt24VEA&s" price = "40.50$" name = "nike jorder" button = "red" />
<Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNBLXRWnhwBxlyyK5gTm-c0EriH0RS7N_3g&s" name = 'Adidas' price= "50.40" button = "brown" />
<Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jd3BuHWpOG2aNVqzGJn977GEFzvxzmb6Qw&s" name = 'Bata' price= "20.40" button = "pink" />
<Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGNXqEgY63RQ9WmYDGpjmXAEEjABiBqBHBg&s" name = 'stylo brand' price= "30.40" button = "green" />
<Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7ZbQ92u1JD-JgD4Kkhkju83p_uvKelP5jw&s" name = '' price= "60.40" button = "blue" />
<Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ucRddLH9Zn8SA4bYx_cQ108z6WXunNB7TA&s" name = 'zilhaal' price= "37.40" button = "black" />
<Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmCAhdKIfdkKTivymRAZpOfN9rsNILUWoJg&s" name = 'zilbil' price= "59.40" button = "purple" />
<Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6_KCEOLDUThiAb_qSbEoAfbDFye5AR2azQ&s" name = 'lunda' price= "20.40" button = "yellow" /></div> : null}


    </div>
    </>
  )
}

