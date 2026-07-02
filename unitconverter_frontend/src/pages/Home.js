// import logo from './logo.svg';
import { useState } from "react";
import { lengthUnits } from "../data/dataset";

function Home() {
    const [measurementType, setMeasurementType] = useState('');
    const [unitFrom, setUnitFrom] = useState(lengthUnits[0]);
    const [unitTo, setUnitTo] = useState(lengthUnits[0]);
    const CONVERSION_URL = "http://localhost:8080/conversion";
    const measurements = ["length", "weight", "temperature"];

    const submitUnits = async (e) => {
        e.preventDefault();
        console.log(measurementType)
        console.log(unitFrom)
        console.log(unitTo)

        if(unitFrom === unitTo){
            console.log("try again. units cannot be same value");
            return ;
        }
        if (!(/^\d*\.?\d*$/.test(measurementType))) {
            console.log("not a value");
            return "not a number. try again"
        }
        
        const response = await fetch(
            `${CONVERSION_URL}?param_name=${measurementType}&type=length&unitFrom=${unitFrom}&unitTo=${unitTo}`
        )
        const data = await response.text();
        console.log(data);
        console.log("test");
    }


  return (
    <div className="Home">
        <div className="bg-[black] text-white text-center text-[17px] p-3 font-bold">
            Unit Converter App
        </div>

        <div className="flex justify-center pt-20 ">
            <form className="border rounded-lg w-[70%] lg:w-[25%]" onSubmit={submitUnits}>
                <div className="flex justify-between bg-[grey]  px-10 text-center rounded-t-lg">
                    {
                        measurements.map((measurement) => (
                            <div className="text-[18px] text-[white] font-bold py-3 w-[100%] capitalize">  {measurement} </div>
                        ))
                    }
                    {/* <div className="text-[18px] text-[black] font-bold bg-white py-3 w-[100%]"> Length </div>
                    <div className="text-[18px] text-[white] font-bold py-3 w-[100%]">  Weight </div>
                    <div className="text-[18px] text-[white] font-bold py-3 w-[100%]"> Temperature </div> */}
                </div>

                
                <div className="px-5 py-10">
                    <div className="mb-5">
                        <label htmlFor="length"> Enter the length to convert</label><br/>
                        <input name="length" type="text" placeholder="Eg: 20" id="length" value={measurementType} 
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*\.?\d*$/.test(value)) {
                            setMeasurementType(value);
                            }
                        }}
                        className="border border-[black] py-2 px-3 rounded-md w-[100%] mt-2"/>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="unitsFrom"> Unit to convert from</label>
                        
                        <select name="unitsFrom" id="unitsFrom" value={unitFrom} onChange={(e) => {setUnitFrom(e.target.value)}}
                        className="border border-[black] py-2 px-3 rounded-md w-[100%] mt-2">
                            { lengthUnits.map((lengthunit) => (
                                <option key={lengthunit} value={lengthunit}> {lengthunit} </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="unitsTo"> Unit to convert to</label>
                        <select name="unitsTo" id="unitsTo" value={unitTo} onChange={(e) => {setUnitTo(e.target.value)}}
                        className="border border-[black] py-2 px-3 rounded-md w-[100%] mt-2">
                            { lengthUnits.map((lengthunit) => (
                                <option key={lengthunit} value={lengthunit}> {lengthunit} </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="bg-[black] text-[18px] text-[white] font-bold border border-[black] 
                    py-2 px-5 text-center uppercase tracking-[2px] rounded-md"> 
                    Convert
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Home;
