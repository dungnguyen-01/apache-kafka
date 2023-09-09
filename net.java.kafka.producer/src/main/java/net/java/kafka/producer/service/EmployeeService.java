package net.java.kafka.producer.service;

import java.util.List;
import java.util.Optional;

import net.java.kafka.producer.entity.Employee;


public interface EmployeeService {

	Employee create(Employee employee);

	List<Employee> findAll();
	
	Optional<Employee> finById(int id);

}
