import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../store/greetings';

const selectGreeting = state => state.randomGreeting

const RandomGreeting = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    console.log('Random greeting')
    dispatch(getGreeting())
  }, [])
  const { greeting } = useSelector(selectGreeting)
  return (
    <h1>{greeting.text}</h1>
  )
}

export default RandomGreeting;
