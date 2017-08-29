import React from 'react';

// styled components
import Textblock from '../components/Textblock'
import Header from '../components/styled/Header'

const Intro = (props) => {
  return (
    <div>
    <Header>Join us!</Header>
      <Textblock
        text = 'TECHNICAL SKILLS SHARE GROUP (TSSG) IS A PURELY VOLUNTEER ORGANIZATION CREATED FOR TECHNICAL PROFESSIONALS EITHER IN-TRANSITION OR ENTHUSIASTS SEEKING PEER-BASED ACTIVE LEARNING '
      />
      <Textblock
        text = 'We develop mobile, web, software quality assurance and data analytics applications with the purpose of keeping members current in the latest software technologies'
      />
      <Textblock
        text = 'To join, you must attend, in-person, one TSSG general meeting on WEDNESDAY. Anyone interested in any aspect of the software development life cycle is welcome to attend: developers, web designers, project managers, support persons, and those interested in learning about these and other roles are welcome.  If you are not sure where you may fit in, we will help you to figure it out. See below for the weekly schedule.'
      />
    </div>
  )
}

export default Intro;
