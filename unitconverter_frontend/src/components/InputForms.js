

function InputForms({currMeasurement, unitValue, setUnitValue, unitFrom, unitTo, setUnitFrom, setUnitTo, currUnit

}) {
    return (
        <div className="px-5 py-10">
                    <div className="mb-5">
                        <label htmlFor="unitValue"> Enter the {currMeasurement} to convert:</label><br/>
                        <input name="unitValue" type="text" placeholder="Eg: 20" id="unitValue" value={unitValue} 
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*\.?\d*$/.test(value)) {
                            setUnitValue(value);
                            }
                        }}
                        className="border border-[black] py-2 px-3 rounded-md w-[100%] mt-2"/>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="unitsFrom"> Unit to convert from:</label>
                        
                        <select name="unitsFrom" id="unitsFrom" value={unitFrom} onChange={(e) => {setUnitFrom(e.target.value)}}
                        className="border border-[black] py-2 px-3 rounded-md w-[100%] mt-2">
                            { currUnit.map((lengthunit) => (
                                <option key={lengthunit} value={lengthunit}> {lengthunit} </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="unitsTo"> Unit to convert to:</label>
                        <select name="unitsTo" id="unitsTo" value={unitTo} onChange={(e) => {setUnitTo(e.target.value)}}
                        className="border border-[black] py-2 px-3 rounded-md w-[100%] mt-2">
                            { currUnit.map((lengthunit) => (
                                <option key={lengthunit} value={lengthunit}> {lengthunit} </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="bg-[black] text-[18px] text-[white] font-bold border border-[black] 
                    py-2 px-5 text-center uppercase tracking-[2px] rounded-md"> 
                    Convert
                    </button>
        </div>
    );
}

export default InputForms;
