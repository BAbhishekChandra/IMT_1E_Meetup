import styled from 'styled-components'

export const RegisterContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  width: 70%;
  align-self: flex-end;
`

export const RegisterFormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormNameContainer = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const FormHeading = styled.h1`
  width: 100%;
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
  color: #334155;
`

export const NameLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
  margin: 5px 0 5px 0;
`

export const NameInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0 20px 0;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  border: 1px solid #7b8794;
  border-radius: 3px;
`

export const TopicLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
  margin: 5px 0 5px 0;
`

export const TopicSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 5px 0 30px 0;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #334155;
  border: 1px solid #7b8794;
  border-radius: 3px;
`

export const TopicOption = styled.option`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #334155;
`

export const RegisterSubmitButton = styled.button`
  width: 50%;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: none;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
`

export const FormErrorParagraph = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`
