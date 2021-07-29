export function getLocation() {
  function showPosition(position) {
    // console.log("Latitude: " + position.coords.latitude)
    // console.log("Longitude: " + position.coords.longitude)
    return {lat: position.coords.latitude, long: position.coords.longitude}
  }
  if (navigator.geolocation) {
    let cooords = navigator.geolocation.getCurrentPosition(showPosition);
    return cooords
  } else {
    console.log("Geolocation is not supported by this browser.")
    return false
  }
}




