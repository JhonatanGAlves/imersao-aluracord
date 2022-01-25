import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './Form'

export const Modal = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <StyledModal className='container-modal'>
      <div className='left-content'>
        <h1>Bem vindo de volta!</h1>
        <p>Jhowcord - Imersão</p>
        <Form
          type='text'
          inputValue={value}
          placeholder='Encontre um usuário do GitHub...'
          onChange={handleChange}
          //Button
          buttonValue='Pesquisar'
        />

      </div>
      <div className='right-content'>
        <div className='square-modal'>
          ...
        </div>
      </div>
    </StyledModal>
  )
}

const StyledModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 500px;
  border-radius: 10px;

  background-color: #3d3d3d;

  .left-content {
    display: block;
    text-align: center;
    align-items: center;
    width: 50%;
    padding: 20px;

    h1 {
      font-size: 32px;
      margin: 0;
  
      color: #FFF;
    }
  
    p {
      font-size: 18px;
      margin: 0 0 50px;
  
      color: #e5e5e5
    }
  }

  .right-content {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;
    padding: 30px;

    .square-modal {
      height: 440px;
      width: 300px;
      border-radius: 10px;

      background-color: #282828;
      color: #282828;
    }
  }
`

export default Modal