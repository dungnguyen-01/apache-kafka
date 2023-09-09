package net.java.kafka.producer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.java.kafka.producer.service.KafkaService;

@RestController()
@RequestMapping("api/v1/test")
public class TestController {
	
	@Autowired
	KafkaService kafkaService;
	
	@GetMapping()
	@ResponseBody
	public String test() {
		
		kafkaService.sendMessageTest("ok nha fen im so good today");
		
		return "ok nha fen";
	}

}
