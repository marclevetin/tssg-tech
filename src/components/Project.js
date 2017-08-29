import React from 'react'
import Text from './styled/Text'
import {SectionHeader} from './styled/Header'


const Project = (props) => {
  return (
    <div>
      <SectionHeader>{props.project}</SectionHeader>
      <Text>{props.description}</Text>
    </div>
  )
}

export default Project;
