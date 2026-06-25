package com.example.demo;

import java.util.ArrayList;

public class CreateUnits {
    
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
