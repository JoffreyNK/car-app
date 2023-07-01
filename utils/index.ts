// import { CarProps, FilterProps } from "@types";

import { searchParamsProps } from "@/types";

export const FetchCars = async (filters: searchParamsProps) =>{
  const {manufacturer, model, year, fuel, limit} = filters
  const url = `https://carhs-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}&make=${manufacturer}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bcc661b622msh19966babd8b5fd6p105bd8jsn5e916f4454a1',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options)

  const result = await response.json()
  return result
}



export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};



export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};




// export const deleteSearchParams = (type: string) => {
//   // Set the specified search parameter to the given value
//   const newSearchParams = new URLSearchParams(window.location.search);

//   // Delete the specified search parameter
//   newSearchParams.delete(type.toLocaleLowerCase());

//   // Construct the updated URL pathname with the deleted search parameter
//   const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

//   return newPathname;
// };





// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('zoomType', 'fullscreen');
//   url.searchParams.append('modelYear', `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`);

//   return `${url}`;
// } 



export const getcarUrl = () => {

  const apiKey = 'Basic MGY4ZmNhNTQtNmU1ZC00ZjcyLWI4OWMtN2Y4ZGMwMGVkODRl';
  const vin = '12345678901234567'; // Replace with a valid VIN
  
  const url = `https://api.carmd.com/v3.0/image?year=2015&model=EQUINOX&make=CHEVROLET`;


  
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'authorization': `${apiKey}`,
      "partner-token":"4b1353287d3141efb90718c503dce3a6"

    }
  })
    .then(response => response.json())
    .then(data => {
      // Handle the API response here
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  

}