import React, {Component} from 'react'
import './main.css'
import Form from '../../components/Form'
import Weather from '../../components/Weather'
const api_key = '55372cd6962f4028b77160038201605';

class WeatherContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: false,
      country: undefined,
      city: undefined,
      temp: undefined,
      pressure: undefined,
      wind: undefined,
      humidity: undefined,
      error: undefined,
      cloud: undefined
    }
  }

  gettingWeather = async (event) => {
    event.preventDefault();
    var data;
    var city = event.target.elements.city;

    if(!city.value) {
      city.focus();

      this.setState({
        result: false,
        error: 'Введите название города'
      });

    } else {
      city = city.value;

      await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`)
        .then(res => res.json())
        .then(result => {
          data = result;

          this.setState({
            result: true,
            country: data.location.country,
            city: data.location.name,
            temp: data.current.temp_c,
            pressure: data.current.pressure_mb,
            wind: data.current.wind_mph,
            humidity: data.current.humidity,
            cloud: data.current.cloud,
            error: null
          });
        })
        .catch(err => {
          this.setState({
            result: false,
            error: 'Такого города не обнаружено'
          })
        });
    }

    console.log(data);
    console.log(this.state);
  }

  render() {
    return (
      <div className="weather-block">
        <div className="info-wet-block">
          <p className="info">Получить прогноз погоды</p>
        </div>
        <div className="func-wet-block">
          <Form gettingWeather={this.gettingWeather.bind(this)}/>
          {
            this.state.result ?
              <Weather
                country={this.state.country}
                city={this.state.city}
                temp={this.state.temp}
                pressure = {this.state.pressure}
                wind = {this.state.wind}
                humidity = {this.state.humidity}
                cloud = {this.state.cloud}
              />
            : <Weather error={this.state.error} />
          }
        </div>


      </div>
    )
  }
}

export default WeatherContainer
