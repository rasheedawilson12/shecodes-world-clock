function updateTime() {
  // los angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");
  }

  // london
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = london.querySelector(".date");
    let londonTimeElement = london.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");
  }

  //sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydney.querySelector(".date");
    let sydneyTimeElement = sydney.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm:ss");
  }

  // seoul
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoul.querySelector(".date");
    let seoulTimeElement = seoul.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
    seoulTimeElement.innerHTML = seoulTime.format("HH:mm:ss");
  }

  // nairobi
  let nairobiElement = document.querySelector("#nairobi");
  if (nairobiElement) {
    let nairobiDateElement = nairobi.querySelector(".date");
    let nairobiTimeElement = nairobi.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");

    nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do, YYYY");
    nairobiTimeElement.innerHTML = nairobiTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm")}</div>
        </div>
        <a href="/">&#8592; Return to Cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
