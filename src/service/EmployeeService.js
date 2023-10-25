import axios from 'axios'
const BASE_URI = 'http://localhost:8080/api/v1/employees'
class EmployeeService {
  getEmployees() {
    return axios.get(BASE_URI)
  }
  createEmployee(employee) {
    return axios.post(BASE_URI, employee)
  }
  getEmployeeById(id) {
    return axios.get(BASE_URI + '/' + id)
  }
  deleteEmployee(id) {
    return axios.delete(BASE_URI + '/' + id)
  }
}
export default new EmployeeService()
