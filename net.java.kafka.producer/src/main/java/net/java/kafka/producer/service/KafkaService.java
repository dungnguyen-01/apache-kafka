package net.java.kafka.producer.service;

import org.springframework.stereotype.Component;

@Component
public class KafkaService extends AbstractKafkaService {
	
	
	public void sendMessageTest(String message) {
		this.kafkaMessageSender.sendMessage(this.config.getKafkaTopicSendMessageTest(), message);
	}
	
	public void sendMessageNotifyCreateEmployee(String message) {
		this.kafkaMessageSender.sendMessage(this.config.getKafkaTopicSendMessageNotifyCreateEmployee(), message);
	}
	

}
