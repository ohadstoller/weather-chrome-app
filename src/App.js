import React, {useEffect, useState} from 'react';
import {SearchBox} from "./components/SearchBox";
import {WeatherBox} from "./components/WeatherBox";
import {TopSites} from "./components/TopSites";
import {Site} from "./components/Site";

const axios = require('axios');

const api = {
  key: "f0bfadd3e43900b8afd59ba32980c7e3",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [topSites, setTopSite] = useState([]);


  useEffect(()=> {
    // eslint-disable-next-line no-undef
    chrome.topSites.get(data => {
      console.log("top sites: ", data)
      setTopSite(data)
    });
  }, [])


  // function createTop(){chrome.topSites.get(function(topSites) {
  //   topSites.forEach(function(site) {
  //     console.log(site)
  //   })
  // })};


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let { latitude, longitude } = position.coords;
      console.log("lat and long ", latitude, longitude)
      const response = await axios.get(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`);
      setWeather(response.data);
    });
  }, []);




const search = (e) => {
  if (e.key === "Enter") {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setCity('');
      });
  }
}


return (
  <div className={'app'}>
    <main>
      <SearchBox onChange={e => setCity(e.target.value)} value={city} onKeyPress={search}/>

      {weather ? (
        <WeatherBox weather={weather}/>
      ) : <div className={"location-box"}>Loading.... If it takes too long, might be an issue with geo location or
        API </div>}

      <TopSites topSites={topSites} callbackfn={site => {
        return (
          <Site key={site.title} site={site}/>
        );
      }}/>
    </main>


  </div>
);
}

export default App;