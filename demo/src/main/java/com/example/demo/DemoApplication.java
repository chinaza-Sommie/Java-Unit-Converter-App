package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
// import java.util.ArrayList;
@SpringBootApplication
@RestController
public class DemoApplication {

	private final ConversionClass conversionClass = new ConversionClass();
	public static void main(String[] args) {
		
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping("/")
	public String hello(@RequestParam(value = "name", defaultValue= "World!") String name) {
		return String.format("Hello %s!", name);
	}

	@GetMapping("/conversion")
	public String getLengthConversion(@RequestParam(value = "param" , defaultValue= "1") Integer param) {
		// int param_length = param;
		String param_name = "length";
		String param_unit_from = "meter";
		String param_unit_to = "centimeter";

		if(param_unit_to.equalsIgnoreCase(param_unit_from)){
			return String.format("both conversion inputs have the same units. Try again");
		}

		switch (param_name.toLowerCase()) {
			case "length":
				double length = conversionClass.lengthConversion(param, param_unit_from, param_unit_to);
				return String.format("length" + length);
			
			case "weight":

				double weight = conversionClass.weightConversion(param, param_unit_from, param_unit_to);
				return String.format("weight"+ weight);

			case "temperature":

				double temp = conversionClass.temperatureConversion(param, param_unit_from, param_unit_to);
				return String.format("temperature" + temp);

			default:
				break;
		}

		return String.format("Hi");

	}

	@GetMapping("/weight_conversion")
	public String getWeightConversion(@RequestParam String param) {
		// int param_length = ;
		return new String();

	}
	
}
