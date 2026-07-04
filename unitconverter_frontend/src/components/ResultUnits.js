

function ResultUnits({unitValue, unitFrom, result, unitTo}) {

    return (
        <div className="px-5 py-10">
            <div className="text-[19px] font-bold">
                Result of you calculation
            </div>
            <div className="py-5">
                <b>{unitValue}</b> {unitFrom} = <b>{result}</b> {unitTo}
            </div>

            <button className="bg-[black] text-[18px] text-[white] font-bold border border-[black] 
                py-2 px-5 text-center uppercase tracking-[2px] rounded-md">
                    Reset
            </button>
        </div>
  );
}

export default ResultUnits;
