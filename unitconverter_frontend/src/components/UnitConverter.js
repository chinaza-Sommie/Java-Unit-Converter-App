// import logo from './logo.svg';
import { useEffect, useState } from "react";
import { unitMap } from "../data/dataset";
import { getUnitResponse } from "../data/urlResponse";
import InputForms from "../components/InputForms";
import NavigationBar from "../components/NavigationBar";
import ResultUnits from "../components/ResultUnits";

function UnitConverter() {
    const [currMeasurement, setCurrMeasurement] = useState('length');
    const [unitValue, setUnitValue] = useState("");
    const currUnit = unitMap[currMeasurement];
    const [unitFrom, setUnitFrom] = useState(currUnit[0]);
    const [unitTo, setUnitTo] = useState(currUnit[1]);
    const [result, setResult] = useState(0);
    const [showResult, setShowResult] = useState(false);


    useEffect(()=>{
        const units = unitMap[currMeasurement];
        setUnitFrom(units[0]);
        setUnitTo(units[1]);
        setShowResult(false);
        setUnitValue("");
    }, [currMeasurement, currUnit]);

    const submitUnits = async (e) => {
        e.preventDefault();
        console.log(unitValue)
        console.log(unitFrom)
        console.log(unitTo)

        if(unitValue === null || unitValue === ""){
            return "Invalid value to convert.Try again";
        }

        if(unitFrom === unitTo){
            console.log("try again. units cannot be same value");
            return ;
        }
        if (!(/^\d*\.?\d*$/.test(unitValue))) {
            console.log("not a value");
            return "not a number. try again"
        }
        
        const data = await getUnitResponse(unitValue, currMeasurement, unitFrom, unitTo);

        console.log(data);
        setResult(data);
        setShowResult(true);
    }


    return (

        <div className="flex justify-center pt-20 ">
            <form className="border rounded-lg w-[70%] lg:w-[25%]" onSubmit={submitUnits}>
                <NavigationBar
                    currMeasurement={currMeasurement}
                    setCurrMeasurement={setCurrMeasurement}
                />
                
                {!showResult ? (
                    <InputForms
                        currMeasurement={currMeasurement} 
                        unitValue={unitValue}
                        setUnitValue={setUnitValue} unitFrom={unitFrom} setUnitFrom={setUnitFrom} 
                        currUnit={currUnit}
                        unitTo={unitTo} 
                        setUnitTo={setUnitTo}
                    />
                ):(
                    <ResultUnits 
                        unitValue={unitValue}
                        unitFrom={unitFrom}
                        result={result}
                        unitTo={unitTo}
                    />
                )}
            </form>

        </div>
  );
}

export default UnitConverter;
