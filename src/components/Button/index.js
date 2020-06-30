import React from 'react'

const Button = (props) => {
  var {type, text, img} = props

  var classes = 'btn waves-effect waves';
  if(props.classes) {
    classes += ' ';
    classes += props.classes;
  }

  return (
    <button className={classes} type={type} onClick={props.func}>
      {text}
      {
        img
        ? <i className="material-icons right">send</i>
        : null
      }
    </button>
  )
}

export default Button
