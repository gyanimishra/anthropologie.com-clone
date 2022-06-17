import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import './Dresses.css'
const DressesCard = ({item,id}) => {
  console.log(id,"id");
  // const paramid= useParams()
    const navigate = useNavigate()
    const [pic, setpic]= useState(false)
    const handleHover = () => {
        setpic(!pic);
    };
    const handleOut = () => {
        setpic(!pic);
    };
    const handleClick=(id)=>{
      localStorage.setItem('dressdata',JSON.stringify(item))
        navigate(`/Dresses/${item.id}`);
        
    }
  return (
    <div className='help' onClick={handleClick}>

    
    <img onMouseOver={handleHover}
                onMouseOut={handleOut} src={pic? item.img1 : item.img2} alt="" />

    <p>{item.title} </p>
                <p>${item.price}</p>
               
      
    </div>
  )
}

export default DressesCard
