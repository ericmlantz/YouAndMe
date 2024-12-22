import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
        element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {<Dashboard />}
            </ProtectedRoute>}
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              {<Posts />}
            </ProtectedRoute>}
        />
      </Routes>
    </Router>
  )
}

export default App
