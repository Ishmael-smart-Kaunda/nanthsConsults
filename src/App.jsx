// Now the App.jsx file becomes less bloated
// It now becomes dedicated to application bootstrapping alone
// Unlike the overload from routing and animations etc.

import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

const App = () => {
  return <RouterProvider router={router} />
}

export default App
