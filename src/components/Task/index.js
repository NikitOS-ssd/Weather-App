import React from 'react'
import './style.css'

const Task = (props) => {
  return (
    <div className="list__card js-card"
      onDragStart={event => props.onDragStart(event, props.name)}
      data-name={props.name}
      draggable="true"
    >
      <div className="list__card-header">
        {props.name}
      </div>
      <div className="list__card-info">
        {props.info}
      </div>
    </div>
  )
}

export default Task
