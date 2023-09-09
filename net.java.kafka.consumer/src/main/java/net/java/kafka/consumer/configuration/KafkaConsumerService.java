package net.java.kafka.consumer.configuration;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import net.java.kafka.consumer.entity.Employee;


@Component
public class KafkaConsumerService extends AbstractListener{
	

	       
	
	@KafkaListener(topics = "${kafka.topic.send-message-test}", groupId = "my-consumer-group")
	public void listenTest(String message) {
		System.out.println("====================== "+message+" ========================");
	}
	
	@KafkaListener(topics = "${kafka.topic.send-message-notify-create-employee}", groupId = "consumer-group-employee-1")
	public void sendMessageNotifyCreateEmployee(String message) throws Exception {
				
	
        try {
        	
           ObjectMapper objectMapper = new ObjectMapper();
           
           System.out.println(message);
        	          
    //       Object obj =  objectMapper.readValue(message, Object.class);
           
           Employee employee = objectMapper.readValue(objectMapper.readValue(message, Object.class).toString(), Employee.class);
       
      	   employee.setJobTitle("update alagin"); 
   		
   		   this.employeeService.create(employee);   
                   
    //        System.out.println(obj);    
        } catch (Exception e) {
            e.printStackTrace();
        }
		
		
		
	//	System.out.println("====================== "+message+" ========================");
	}
	
	

}
