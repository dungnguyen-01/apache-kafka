package net.java.kafka.consumer.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.java.kafka.consumer.dao.EmployeeDao;
import net.java.kafka.consumer.entity.Employee;
import net.java.kafka.consumer.service.EmployeeService;



@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeDao dao;

	@Override
	public Employee create(Employee employee) {
		dao.save(employee);
		return employee;
		
	}

	@Override
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Optional<Employee> finById(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}
	
	
}
