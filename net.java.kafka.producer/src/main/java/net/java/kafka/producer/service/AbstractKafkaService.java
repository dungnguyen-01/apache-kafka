package net.java.kafka.producer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import net.java.kafka.producer.configuration.KafkaApplicationProperties;
import net.java.kafka.producer.sender.KafkaMessageSender;


@Component
public abstract class AbstractKafkaService {
	
	@Autowired
	protected KafkaMessageSender kafkaMessageSender;
	
	@Autowired
	KafkaApplicationProperties config;

}
