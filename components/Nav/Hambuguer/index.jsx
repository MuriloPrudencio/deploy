import React, { useState } from 'react';
import { StyledBurger } from './styled';
import Navigation from '../Menu';

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Navigation open={open}/>
    </>
  )
}

export default Burger