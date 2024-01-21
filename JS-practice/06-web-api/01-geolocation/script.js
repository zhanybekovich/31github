// function curSuccess(pos) {
//   // console.log(pos);

//   const coords = pos.coords;
//   console.log(coords.latitude);
//   console.log(coords.longitude);
//   console.log(coords.accuracy, "meters");
// }

// function curError(err) {
//   console.log(err.code);
//   console.log(err.message);
// }

// navigator.geolocation.getCurrentPosition(curSuccess, curError);

// =================

/* Geolocation with options */

// function curSuccess(pos) {
//   // console.log(pos);

//   const coords = pos.coords;
//   console.log(coords.latitude);
//   console.log(coords.longitude);
//   console.log(coords.accuracy, "meters");
// }

// function curError(err) {
//   console.log(err.code);
//   console.log(err.message);
// }

// const options = {
//   enableHighAccuracy: true, // use GPS if available
//   timeout: 5000, // Time to wait to stop trying for location
//   maximumAge: 0, // do not use cached position
// };

// navigator.geolocation.getCurrentPosition(curSuccess, curError, options);

// ===================

/* Watching position */

// Watch fires when the location changes
const target = {
  latitude: 42.8746212,
  longitude: 74.5697617,
};

function watchSuccess(pos) {
  const coords = pos.coords;

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log("Вы приехали");

    // clear watching

    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(err.code);
  console.log(err.message);
}

const watchOptions = {
  enableHighAccuracy: true, // use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // do not use cached position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
