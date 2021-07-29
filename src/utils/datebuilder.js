const dateBuilder = (fullDate) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[fullDate.getDay()];
  let date = fullDate.getDate();
  let month = months[fullDate.getMonth()];
  let year = fullDate.getFullYear();
  return `${day} ${date} ${month} ${year}`
}

const mockedTopSites = [
  {title: "Facebook", url: "https://www.facebook.com/"},
  {title: "Inbox (251) - ohadstoller@gmail.com - Gmail", url: "https://gmail.com/"},
  {title: "Instagram", url: "https://www.instagram.com/"},
  {title: "(8) LinkedIn", url: "https://www.linkedin.com/"},
  {title: "N12 – אתר החדשות של ישראל", url: "https://www.n12.co.il/"},
  {title: "GitHub", url: "https://github.com/"},
  {title: "Adam Eyal's Frontend Masters", url: "https://frontendmasters.com/dashboard/"},
  {title: "YouTube", url: "https://www.youtube.com/"},
  {title: "Domain Names, Websites, Hosting & Online Marketing Tools - GoDaddy IL", url: "https://www.godaddy.com/"},
  {title: "vue-social", url: "http://localhost:8080/post/3"}
]

const mockedRes =
  {
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 282.55,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  }


export {dateBuilder, mockedRes, mockedTopSites}