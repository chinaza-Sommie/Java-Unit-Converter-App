package com.example.demo;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class ConversionClass {

    private final Map<String, Double> lengthToMeters = Map.of(
        "millimeter", 0.001,
        "centimeter", 0.01,
        "meter", 1.0,
        "kilometer", 1000.0,
        "inch", 0.0254,
        "foot", 0.3048,
        "yard", 0.9144,
        "mile", 1609.34
    );

    private final Map<String, Double> weightTograms = Map.of(
        "milligram", 0.001,
        "gram", 1.0,
        "kilogram", 1000.0,
        "ounce", 28.35,
        "pound", 453.59
    );

    private final List<String> tempTograms = Arrays.asList(
        "celsius", "fahrenheit", "kelvin"
    );
    public ConversionClass(){
    }

    public double lengthConversion(Integer length, String unit_from, String unit_to){
        // System.out.println(length);
        // System.out.println(unit_from);
        // System.out.println(unit_to);
        if(!lengthToMeters.containsKey(unit_to) || !lengthToMeters.containsKey(unit_from)){
            throw new IllegalArgumentException("invalid unit");
        }

        return convertToTargetUnit(length, unit_from, unit_to, lengthToMeters);
    }

    public double weightConversion(Integer weight, String unit_from, String unit_to){
       if(!weightTograms.containsKey(unit_to) || !weightTograms.containsKey(unit_from)){
            throw new IllegalArgumentException("invalid unit");
        }
        return convertToTargetUnit(weight, unit_from, unit_to, weightTograms);
    }

    public double convertToTargetUnit(Integer value, String unit_from, String unit_to, Map<String, Double> unitstorage){
     
        double convertToMeters = value * unitstorage.get(unit_from);
        double convertToTarget = convertToMeters / unitstorage.get(unit_to);
        return convertToTarget;
    }


    public double temperatureConversion(Integer weight, String unit_from, String unit_to){
        
        if(!tempTograms.contains(unit_to) || !tempTograms.contains(unit_from)){
            throw new IllegalArgumentException("invalid unit");
        }
        double convertToKelvin = convertToKelvin(weight, unit_from);
        double convertToTarget = convertToTargetTemp(convertToKelvin, unit_to);
        return convertToTarget;
        
    }

    public double convertToKelvin(double weight, String unit_from){
        
        switch (unit_from) {
            case "fahrenheit":
                double FahrenheitToKelvin = (weight - 32) * (5/9) + 273.15;
                return FahrenheitToKelvin;
            case "celsius":
                double CelsiusToKelvin = weight + 273.15;
                return CelsiusToKelvin;

            case "kelvin":
                return weight;
            default:
                throw new IllegalArgumentException("Unknown temperature unit");
        }
    }


    public double convertToTargetTemp(double weight, String unit_to){
        
        switch (unit_to) {
            case "Fahrenheit":
                double toFahrenheit = (weight - 273.15) * (9/5) + 32;
                return toFahrenheit;
            case "Celsius":
                double toCelsius = weight - 273.15;
                return toCelsius;

            case "Kelvin":
                return weight;
            default:
                throw new IllegalArgumentException("Unknown temperature unit");
        }
    }
    
}
