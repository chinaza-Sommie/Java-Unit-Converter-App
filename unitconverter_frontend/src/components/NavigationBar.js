import { measurements } from "../data/dataset";

function NavigationBar({currMeasurement, setCurrMeasurement}) {

    return (
        <div className="flex justify-between bg-[grey]  px-10 text-center rounded-t-lg">
            {
                measurements.map((measurement) => (
                    <div className={`text-[18px] font-bold py-3 w-[100%] capitalize
                        ${currMeasurement === measurement ? "text-[black] bg-white" : "text-[white] hover:bg-gray-500" }`}
                        onClick={() => setCurrMeasurement(measurement)}> 
                            {measurement} 
                    </div>
                ))
            }
        </div>
  );
}

export default NavigationBar;
