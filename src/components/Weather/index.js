import React, {Fragment} from 'react'
import './main.css'


const Weather = (props) => {
  var cls = ['weather-card'];
  var {country, city, temp, pressure, wind, humidity, cloud, error} = props;

  if(city || error) {
    cls.push('show');
  }

  return (
    <div className={cls.join(' ')}>
      {city ?
        <Fragment>
          <p>Страна: {country}</p>
          <p>Город: {city}</p>
          <p>Температура: {temp}</p>
          <p>Давление: {pressure}</p>
          <p>Скорость ветра в м/ч: {wind}</p>
          <p>Влажность: {humidity}</p>
          <p>Облачность: {cloud}</p>
        </Fragment>
        : <p>{error}</p>
      }

    </div>
  )
}


export default Weather;
