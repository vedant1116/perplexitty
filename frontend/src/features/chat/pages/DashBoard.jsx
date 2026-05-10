import React from 'react'
import { useSelector } from "react-redux";
import { useChat } from '../hooks/useChat';
import { useEffect } from 'react';
const DashBoard= () => {
    const {user} = useSelector(state => state.auth)
    console.log(user);
    
    const chat = useChat();
    
    useEffect(()=>{
      chat.intializeSocketConnection() 
    },[])

  return (
    <div>
      DashBoard
    </div>
  )
}

export default DashBoard

