// Get bordering countries function
// Using async fetch, call the countries API for a country by code.
// Create a function that gets all the neighbouring countries objects and returns them in the console

// With getting an array:
// async function getBorderingCountries(code) {
//     const url = `https://restcountries.com/v2/alpha/${code}`;
//     try {
//         const response = await fetch(url);
//         const country = await response.json();
//         const borderingCountries = country.borders;
//         console.log(borderingCountries);
//     } catch (error) {
//         console.error(error);
//     }
// }

// With getting the objects:
async function getBorderingCountries(code) {
    const url = `https://restcountries.com/v2/alpha/${code}`;
    try {
        const response = await fetch(url);
        const country = await response.json();
        console.log("Country:", country);
        const borderingCountries = country.borders;

        for (let borderCode of borderingCountries) {
            const borderUrl = `https://restcountries.com/v2/alpha/${borderCode}`;
            const borderResponse = await fetch(borderUrl);
            const borderCountry = await borderResponse.json();
            console.log("Neighbour:", borderCountry);
        }
    } catch (error) {
        console.error(error);
    }
}


getBorderingCountries("MKD");