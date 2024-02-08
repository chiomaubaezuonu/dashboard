import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Dashboard />}></Route>
       </Routes>
       </BrowserRouter>
    )
}

export default AppRoutes