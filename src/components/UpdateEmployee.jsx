import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEmployee = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [employee, setEmployee] = useState({
    id: '',
    firstName: '',
    lastName: '',
    emailId: ''
  })
  useEffect(() => {
    getEmployeeById()
  }, [])
  const getEmployeeById = () => {
    EmployeeService.getEmployeeById(id)
      .then((res) => setEmployee(res.data))
      .catch((e) => console.log(e))
  }
  const handleChange = (e) => {
    const value = e.target.value
    setEmployee({ ...employee, [e.target.name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    EmployeeService.createEmployee(employee)
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((e) => console.log(e))
  }
  return (
    <form>
      <input onChange={handleChange} name='firstName' value={employee.firstName} type='text' placeholder='firstname...' />
      <input onChange={handleChange} name='lastName' value={employee.lastName} type='text' placeholder='lastname...' />
      <input onChange={handleChange} name='emailId' value={employee.emailId} type='text' placeholder='email...' />
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

export default UpdateEmployee
