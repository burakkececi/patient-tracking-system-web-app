import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../components/HomePage'
import Users from '../components/Users'
import NotFound from '../components/NotFound'
import LoginPage from '../components/LoginPage'
import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'


const AppRouter = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/home' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default AppRouter
