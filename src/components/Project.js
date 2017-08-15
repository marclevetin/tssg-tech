import React, {Component} from 'react'

const Project = (props) => {
  return (
    <div>
      <h4>{props.project}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default Project;
