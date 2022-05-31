import { configureStore } from '@reduxjs/toolkit';
import { greetingSlice, greetingsReducer } from './greetings';

const store = configureStore({
  reducer: {
    randomGreeting: greetingSlice.reducer
  }
})

export default store;
