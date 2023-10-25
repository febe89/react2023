import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeById = () => {
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
  return (
    <div className=''>
      <h1>{employee.firstName}</h1>
    </div>
  )
}

export default EmployeeById
