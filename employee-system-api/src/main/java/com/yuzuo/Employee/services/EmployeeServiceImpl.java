package com.yuzuo.Employee.services;

import com.yuzuo.Employee.entitiy.EmployeeEntity;
import com.yuzuo.Employee.model.Employee;
import com.yuzuo.Employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

//        copy all information from employee to employeeEntity
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }
}
