import React from 'react'
import './main.css'


const Form = (props) => {
  var {gettingWeather} = props;
  return (
    <form onSubmit={ (event) => {gettingWeather(event)} }>
      <input type="text" name="city" placeholder="City..." />
      <button className="btn waves-effect waves-light" type="submit">Submit
        <i className="material-icons right">send</i>
      </button>
    </form>
  )
}


export default Form;
