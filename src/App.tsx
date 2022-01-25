import React from 'react'
import styled from 'styled-components'
import imgBKG from './assets/images/background.jpg'
import Modal from './components/Modal'

export const App = () => {
  return (
    <StyledApp className="App">
      <Modal />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  // -----BKG CSS-----
  background-image: url(${imgBKG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export default App
