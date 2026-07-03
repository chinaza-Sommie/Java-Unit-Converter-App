package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
// import java.util.ArrayList;
@SpringBootApplication
@CrossOrigin(origins = { "http://localhost:3000", "http://192.168.55.223:3000"})
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
	// public String getLengthConversion(@RequestParam(value = "param" , defaultValue= "1") Integer param) {
	public String getLengthConversion(@RequestParam Integer param_name, @RequestParam String type,
		@RequestParam String unitFrom, @RequestParam String unitTo
	) {
		// int param_length = param;
		// String param_name = "length";
		// String param_unit_from = "meter";
		// String param_unit_to = "centimeter";
		System.out.println("param_name" + param_name);
		System.out.println("type" + type);
		System.out.println("unitFrom" + unitFrom);
		System.out.println("unitTo" + unitTo);
		if(unitTo.equalsIgnoreCase(unitFrom)){
			return String.format("both conversion inputs have the same units.Try again");
		}

		switch (type.toLowerCase()) {
			case "length":
				double length = conversionClass.lengthConversion(param_name, unitFrom, unitTo);
				return String.valueOf(length);
			
			case "weight":

				double weight = conversionClass.weightConversion(param_name, unitFrom, unitTo);
				return String.valueOf(weight);

			case "temperature":

				double temp = conversionClass.temperatureConversion(param_name, unitFrom, unitTo);
				return String.valueOf(temp);

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
