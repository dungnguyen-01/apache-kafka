package net.java.kafka.producer.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class KafkaApplicationProperties {

	@Value("${kafka.bootstrap_server_config}")
	private String kafkaBootstrapServerConfig;
	
	@Value("${kafka.topic.send-message-test}")
	private String kafkaTopicSendMessageTest;
	
	@Value("${kafka.topic.send-message-notify-create-employee}")
	private String kafkaTopicSendMessageNotifyCreateEmployee;
	

	public String getKafkaBootstrapServerConfig() {
		return kafkaBootstrapServerConfig;
	}

	public void setKafkaBootstrapServerConfig(String kafkaBootstrapServerConfig) {
		this.kafkaBootstrapServerConfig = kafkaBootstrapServerConfig;
	}

	public String getKafkaTopicSendMessageTest() {
		return kafkaTopicSendMessageTest;
	}

	public void setKafkaTopicSendMessageTest(String kafkaTopicSendMessageTest) {
		this.kafkaTopicSendMessageTest = kafkaTopicSendMessageTest;
	}

	public String getKafkaTopicSendMessageNotifyCreateEmployee() {
		return kafkaTopicSendMessageNotifyCreateEmployee;
	}

	public void setKafkaTopicSendMessageNotifyCreateEmployee(String kafkaTopicSendMessageNotifyCreateEmployee) {
		this.kafkaTopicSendMessageNotifyCreateEmployee = kafkaTopicSendMessageNotifyCreateEmployee;
	}
	

}
