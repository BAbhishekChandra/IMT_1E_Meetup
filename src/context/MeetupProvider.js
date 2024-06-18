import {Component} from 'react'
import MeetupContext from './MeetupContext'

class MeetupProvider extends Component {
  state = {
    name: '',
    selectedOption: 'ARTS_AND_CULTURE',
    displayTextOption: 'Arts and Culture',
    registerSuccessful: false,
  }

  changeMeetupValues = (name, selectedOption, displayTextOption) => {
    this.setState({
      name,
      selectedOption,
      displayTextOption,
      registerSuccessful: true,
    })
  }

  render() {
    const {children} = this.props
    const {
      name,
      selectedOption,
      displayTextOption,
      registerSuccessful,
    } = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          selectedOption,
          registerSuccessful,
          displayTextOption,
          changeMeetupValues: this.changeMeetupValues,
        }}
      >
        {children}
      </MeetupContext.Provider>
    )
  }
}

export default MeetupProvider
