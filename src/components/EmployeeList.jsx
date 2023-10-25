import React, { useState, useEffect } from 'react'
import EmployeeService from '../service/EmployeeService'
import Employee from './Employee'
import { Link, useNavigate } from 'react-router-dom'

const EmployeeList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    getEmployees()
  }, [])

  const getEmployees = () => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await EmployeeService.getEmployees()
        setList(response.data)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }
  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id)
      .then((res) => {console.log(res)})
      .catch((e) => console.log(e))
    setList((el) => el.filter((e) => e.id !== id))
  }

  return (
    <div className=''>
      <Link to={'/createemployee'}>createEmployee</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>emailId</th>
            <th>actions</th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {list.map((employee) => (
              <Employee key={employee.id} deleteEmployee={deleteEmployee} employee={employee} />
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default EmployeeList
