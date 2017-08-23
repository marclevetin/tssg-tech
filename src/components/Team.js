import React, {Component} from 'react'

const Team = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  )
}

export default Team;
