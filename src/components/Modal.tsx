import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Form from './Form'

export const Modal = () => {
  const [value, setValue] = useState('')
  const [username, setUsername] = useState('JhonatanGAlves')

  useEffect(() => {
    if (value) {
      setUsername(value)
    } else {
      setUsername('JhonatanGAlves')
    }
  }, [value])

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
          typeButton='submit'
          onSubmit={function (e) {
            e.preventDefault()
            console.log('dwdwdwdwd')
          }}
          buttonValue='Pesquisar'
        />

      </div>
      <div className='right-content'>
        <div className='square-modal'>
          <img src={`https://github.com/${username}.png`} alt="Avatar do GitHub" />
          <span>{username}</span>
        </div>
      </div>
    </StyledModal>
  )
}

const StyledModal = styled.form`
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

      height: 440px;
      width: 300px;
      border-radius: 10px;

      background-color: #282828;
      color: #282828;

      img {
        width: 250px;
        border-radius: 50%;
      }

      span {
        margin-top: 10px;
        padding: 5px 10px;
        border: 1px solid #111111;
        border-radius: 10px;

        background-color: #3d3d3d;
        color: #FFF; 
      }
    }
  }
`

export default Modal