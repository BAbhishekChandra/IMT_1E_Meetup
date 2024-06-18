import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import {
  HomeContainer,
  HomeHeading,
  HomeParagraph,
  RegisterButton,
  RegisteredViewHomeHeading,
  RegisteredViewHomeParagraph,
  HomeMeetupImage,
} from './styledComponents'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {name, displayTextOption, registerSuccessful} = value

      return (
        <HomeContainer>
          {!registerSuccessful ? (
            <>
              <HomeHeading>Welcome to Meetup</HomeHeading>
              <HomeParagraph>Please register for the topic </HomeParagraph>
              <Link to="/register">
                <RegisterButton type="button">Register</RegisterButton>
              </Link>
              <HomeMeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </>
          ) : (
            <>
              <RegisteredViewHomeHeading>
                Hello {name}
              </RegisteredViewHomeHeading>
              <RegisteredViewHomeParagraph>
                Welcome to {displayTextOption}
              </RegisteredViewHomeParagraph>
              <HomeMeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </>
          )}
        </HomeContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
