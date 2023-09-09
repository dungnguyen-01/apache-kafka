package net.java.kafka.producer.common;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

public class Utils {

	
	public static String getDatetimeFormatVN(Date date) {
		if (date == null) {
			return "";
		} else {
			return (new SimpleDateFormat("dd/MM/yyyy HH:mm").format(date));
		}
	}
	
	public static String convertObjectToJson(Object object) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			String json = mapper.writeValueAsString(object);
			return json;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String convertObjectToJsonObject(Object object) {
		try {
			ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
			return ow.writeValueAsString(object);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
