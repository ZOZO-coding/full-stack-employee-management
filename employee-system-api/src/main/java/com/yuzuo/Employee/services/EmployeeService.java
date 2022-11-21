package com.yuzuo.Employee.services;

import com.yuzuo.Employee.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getEmployees();
}
