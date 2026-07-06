
export const getUnitResponse = async (unitValue, currMeasurement, unitFrom, unitTo) => {
    const CONVERSION_URL = "http://localhost:8080/conversion";

    const response = await fetch(
                `${CONVERSION_URL}?param_name=${unitValue}&type=${currMeasurement}&unitFrom=${unitFrom}&unitTo=${unitTo}`
            )
    const data = await response.text();
    return data
}