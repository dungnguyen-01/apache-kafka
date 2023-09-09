package net.java.kafka.consumer.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import net.java.kafka.consumer.service.EmployeeService;

@Component
public abstract class AbstractListener {
	
	@Autowired
	EmployeeService employeeService;

}
