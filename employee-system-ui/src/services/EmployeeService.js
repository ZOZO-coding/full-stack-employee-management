import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

// create an EmployeeService class, when different methods such as save, get...

class EmployeeService {

    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

}

// export the class with instantiation, so that whenever we import it, we can start using the methods defined in the class.
export default new EmployeeService();