//Import React
import React, {useState} from "react";
//Import the API (Application Programming Interface) "Axios"
import axios from "axios";
//Create a function component called "App"
function App() {
  //Create two variables using the "useState" hook representing the data
  const [data, setData] = useState({});
  //Create two varibales using the "useState" hook representing the location
  const [location, setLocation] = useState("");
  const searchLocation = (event) => {
    if(event.key === "Enter")
    {
      axios.get(url).then((response) => {
        setData(response.data);
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
        console.log(response.data);
      }) 
      setLocation("");
    }
  }
  //Create four variables using the "useState" hook representing the date
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  //Create an arrow function to refresh the time
  const refresh = (event) => {
    event.preventDefault();
    setHours(new Date().getHours());
    setMinutes(new Date().getMinutes());
  }
  //Create a variable of type string that represents the API (Application Programming Interface) key of the application
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="refresh">
        <button onClick={refresh}>Refresh</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="time">
            <p>{hours}{hours === "" ? "" : ":"}{minutes}</p>
          </div>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
//Export the function component "App"
export default App;
