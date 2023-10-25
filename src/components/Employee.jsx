import React from 'react'
import { Link } from 'react-router-dom'

const Employee = ({ employee, deleteEmployee }) => {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
      <td>
        <Link to={`/employeebyid/${employee.id}`}>get</Link>
        <Link to={`/editemployee/${employee.id}`}>update</Link>
        <button onClick={() => deleteEmployee(employee.id)}>deltee</button>
      </td>
    </tr>
  )
}

export default Employee
