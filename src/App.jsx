import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import EmployeeList from './components/EmployeeList'
import CreateEmployee from './components/CreateEmployee'
import EmployeeById from './components/EmployeeById'
import UpdateEmployee from './components/UpdateEmployee'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/createemployee' element={<CreateEmployee />} />
        <Route path='/employeebyid/:id' element={<EmployeeById />} />
        <Route path='/editemployee/:id' element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
