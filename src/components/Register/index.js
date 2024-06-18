import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import {
  RegisterContainer,
  RegisterImageContainer,
  RegisterImage,
  RegisterFormContainer,
  FormNameContainer,
  FormHeading,
  NameLabel,
  NameInput,
  TopicLabel,
  TopicSelect,
  TopicOption,
  RegisterSubmitButton,
  FormErrorParagraph,
} from './styledComponents'

const topicsList = [
  {id: 'ARTS_AND_CULTURE', displayText: 'Arts and Culture'},
  {id: 'CAREER_AND_BUSINESS', displayText: 'Career and Business'},
  {id: 'EDUCATION_AND_LEARNING', displayText: 'Education and Learning'},
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },

  {id: 'GAMES', displayText: 'Games'},
]

class Register extends Component {
  state = {
    name: '',
    selectedOption: topicsList[0].id,
    nameError: false,
  }

  onChangeInputName = event => {
    this.setState({name: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({selectedOption: event.target.value})
  }

  onSubmitRegisterForm = (event, changeMeetupValues) => {
    event.preventDefault()
    const {history} = this.props
    const {name, selectedOption} = this.state
    const displayTextOption = topicsList.find(
      topic => topic.id === selectedOption,
    ).displayText

    if (name === '') {
      this.setState({nameError: true})
    } else {
      changeMeetupValues(name, selectedOption, displayTextOption)
      history.replace('/')
    }
  }

  render() {
    const {name, selectedOption, nameError} = this.state

    return (
      <MeetupContext.Consumer>
        {({changeMeetupValues}) => (
          <RegisterContainer>
            <RegisterImageContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </RegisterImageContainer>
            <RegisterFormContainer>
              <FormNameContainer
                onSubmit={event =>
                  this.onSubmitRegisterForm(event, changeMeetupValues)
                }
              >
                <FormHeading>Let us join</FormHeading>
                <NameLabel htmlFor="Topics">NAME</NameLabel>
                <NameInput
                  type="text"
                  placeholder="Your name"
                  id="Topics"
                  onChange={this.onChangeInputName}
                  value={name}
                />
                <TopicLabel htmlFor="SelectTopic">TOPICS</TopicLabel>
                <TopicSelect
                  id="SelectTopic"
                  onChange={this.onChangeSelectOption}
                  value={selectedOption}
                >
                  {topicsList.map(eachOption => (
                    <TopicOption key={eachOption.id} value={eachOption.id}>
                      {eachOption.displayText}
                    </TopicOption>
                  ))}
                </TopicSelect>
                <RegisterSubmitButton type="submit">
                  Register Now
                </RegisterSubmitButton>
                {nameError && (
                  <FormErrorParagraph>
                    Please enter your name
                  </FormErrorParagraph>
                )}
              </FormNameContainer>
            </RegisterFormContainer>
          </RegisterContainer>
        )}
      </MeetupContext.Consumer>
    )
  }
}

export default withRouter(Register)
