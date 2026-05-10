import React from 'react'
import { router } from './app.routes'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../features/auth/hooks/useAuth'

const App = () => {

  const { handleGetMe } = useAuth();
  
  useEffect(()=>{
    handleGetMe()
  },[])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
