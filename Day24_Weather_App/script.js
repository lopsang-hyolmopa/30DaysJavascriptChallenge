const fetchWeather = async (location) => {
  try {
    const apiResponse = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3d21b686452d4575862150217240508&q=${location}`
    );
    if (!apiResponse.ok) {
      throw new Error("Requrest failed with response: " + apiResponse.status);
    }
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.error("Something went wrong!", error);
  }
};

const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputLocation = document.getElementById("input").value;
  console.log(inputLocation);
  const weather = await fetchWeather(inputLocation);
  document.getElementById("input").value = ''
  document.getElementById("location").textContent = `${weather.location.name}, ${weather.location.country}`;
  document.getElementById("temperature").textContent = weather.current.temp_c + ' C';
  document.getElementById("time").textContent = weather.current.condition.text;
  console.log(weather);
});

