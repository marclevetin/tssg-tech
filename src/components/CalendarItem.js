import React from 'react';
import Text, {ItalicsText} from './styled/Text'
import {SectionHeader} from './styled/Header'

const CalendarItem = (props) => {
  return (
    <div>
      <SectionHeader>{props.title}</SectionHeader>
      <Text>{props.when}</Text>
      <Text>{props.where}</Text>
      <ItalicsText>Location may vary.  Contact {props.join} to learn how to attend.</ItalicsText>
      <Text>{props.details}</Text>
    </div>
  )
}

export default CalendarItem;
