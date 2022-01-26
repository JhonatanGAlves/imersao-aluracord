import React, { useState } from 'react'
import { ChangeEventHandler, FormEventHandler } from 'react'
import styled from 'styled-components'

type InputProps = {
  type: string
  inputValue: string
  placeholder: string
  buttonValue: string
  onChange: ChangeEventHandler
  typeButton: "submit" | "button" | "reset"
  onSubmit: FormEventHandler
}

export const Form = (props: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <StyledForm>
      <StyledInput
        type={props.type}
        value={props.inputValue || inputValue}
        placeholder={props.placeholder}
        onChange={props.onChange || handleChange}
      />
      <StyledButton
        type={props.typeButton}
        onSubmit={props.onSubmit}
      >
        {props.buttonValue}
      </StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.div`
  display: block;
  justify-content: center;

  color: #8e8e8e;
`

const StyledInput = styled.input`
  width: 360px;
  padding: 10px;
  border: 1px solid #111111;
  border-radius: 5px;
  outline: 0;
  font-size: 18px;
  font-weight: 300;

  background-color: #282828;
  color: #FFF;
`

const StyledButton = styled.button`
  margin-top: 10px;
  width: 383px;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;


  background-color: #43B581;
  color: #e5e5e5;

  &&:hover {
    background-color: #22a568;
  }
`

export default Form