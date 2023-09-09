package net.java.kafka.consumer.common;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Strings;

public class Utils {
	
	public static <T> T convertJsonStringToObject(String jsonString, Class<T> objectclass) throws Exception {
		if (Strings.isNullOrEmpty(jsonString)) {
			return null;
		}
		ObjectMapper mapper = new ObjectMapper();
		T result = mapper.readValue(jsonString, objectclass);
		return result;
	}

}
