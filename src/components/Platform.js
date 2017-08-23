import React, {Component} from 'react';

const Platform = (props) => {
  return (
    <div>
      <li>{props.platform} - {props.description}</li>
    </div>
  )
}

export default Platform;
