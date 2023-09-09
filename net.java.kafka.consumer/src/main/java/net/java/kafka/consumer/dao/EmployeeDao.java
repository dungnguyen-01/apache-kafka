package net.java.kafka.consumer.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import net.java.kafka.consumer.entity.Employee;



public interface EmployeeDao  extends JpaRepository<Employee, Integer>{

}
