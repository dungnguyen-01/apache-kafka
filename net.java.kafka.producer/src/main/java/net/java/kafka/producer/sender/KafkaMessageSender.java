package net.java.kafka.producer.sender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

/***
 */

@Component
public class KafkaMessageSender {
	
	@Autowired
	private KafkaTemplate<String, Object> kafkaTemplate;
	
	public void sendMessage(String topicName, Object message) {
		kafkaTemplate.send(topicName, message);
	}

	
}
