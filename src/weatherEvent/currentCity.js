const axios = require('axios');


const fetchCurrentCity = async (api, lat, long) => {
  const {base, key} = api
  let response = await axios.get(`${base}weather?lat=${lat}&lon=${long}&units=metric&appid=${key}`);
  let data = response.json()
  return data
}

export {fetchCurrentCity}