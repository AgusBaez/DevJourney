function isShortsWeather(temp) {
  console.log("---- is Shorts Weather? ----");
  if (temp >= 75) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

isShortsWeather(75); //output true
isShortsWeather(50); //output false
