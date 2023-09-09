package net.java.kafka.consumer.service;

import java.util.List;
import java.util.Optional;

import net.java.kafka.consumer.entity.Employee;



public interface EmployeeService {

	Employee create(Employee employee);

	List<Employee> findAll();
	
	Optional<Employee> finById(int id);

}
