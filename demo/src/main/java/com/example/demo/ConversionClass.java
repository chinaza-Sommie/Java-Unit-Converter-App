package com.example.demo;

import java.util.ArrayList;
import java.util.Arrays;

public class ConversionClass {
    private ArrayList<String> length_units;

    public ConversionClass(){
        this.length_units = createLengthArray();
    }

    public int lengthConversion(int length){
        return length;
    }

    public int weightConversion(int weight){
        return weight;
    }

    public int temperatureConversion(int temp){
        return temp;
    }

    public int toMillimeter(int temp){
        return temp;
    }

    public ArrayList<String> printArrayList(){
        return length_units;
    }

    private ArrayList<String> createLengthArray(){
        ArrayList<String> length_units = new ArrayList<>();
        length_units.add("millimeter");
        length_units.add("centimeter");
        length_units.add("meter");
        length_units.add("kilometer");
        length_units.add("inch");
        length_units.add("foot");
        length_units.add("yard");
        length_units.add("mile");

        return length_units;
    }
}
