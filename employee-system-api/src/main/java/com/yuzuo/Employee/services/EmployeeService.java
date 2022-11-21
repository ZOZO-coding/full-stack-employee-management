package com.yuzuo.Employee.services;

import com.yuzuo.Employee.model.Employee;
import org.springframework.stereotype.Service;

public interface EmployeeService {
    Employee createEmployee(Employee employee);
}
