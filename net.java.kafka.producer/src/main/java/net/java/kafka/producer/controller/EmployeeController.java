package net.java.kafka.producer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.java.kafka.producer.common.Utils;
import net.java.kafka.producer.entity.Employee;
import net.java.kafka.producer.request.CUEmployeeRequest;
import net.java.kafka.producer.response.BaseResponse;
import net.java.kafka.producer.response.EmployeeResponse;
import net.java.kafka.producer.service.EmployeeService;
import net.java.kafka.producer.service.KafkaService;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

	@Autowired
	KafkaService kafkaService;

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("/create")
	public ResponseEntity<BaseResponse<?>> create(@RequestBody CUEmployeeRequest wrapper) {

		BaseResponse<EmployeeResponse> response = new BaseResponse<>();

		Employee employee = new Employee();
		employee.setName(wrapper.getName());
		employee.setAddress(wrapper.getAddress());
		employee.setPhone(wrapper.getPhone());
		employee.setJobTitle(wrapper.getJobTitle());
		employee.setSalary(wrapper.getSalary());

		employeeService.create(employee);
		
		kafkaService.sendMessageNotifyCreateEmployee(Utils.convertObjectToJson(employee));

		response.setData(new EmployeeResponse(employee));
		return new ResponseEntity<>(response, HttpStatus.OK);

	}

	@GetMapping()
	public ResponseEntity<BaseResponse<List<EmployeeResponse>>> getAll() {

		BaseResponse<List<EmployeeResponse>> response = new BaseResponse<>();

		response.setData(new EmployeeResponse().mapToList(employeeService.findAll()));
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
