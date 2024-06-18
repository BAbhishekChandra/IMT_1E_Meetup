import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  selectedOption: 'ARTS_AND_CULTURE',
  displayText: 'Arts and Culture',
  registerSuccessful: false,
  changeMeetupValues: () => {},
})

export default MeetupContext
