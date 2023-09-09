package net.java.kafka.producer.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import net.java.kafka.producer.entity.Employee;


public interface EmployeeDao  extends JpaRepository<Employee, Integer>{

}
