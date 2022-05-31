import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const getGreeting = createAsyncThunk('randomGreeting', async () => {
  const { data } = await axios.get('http://127.0.0.1:3000/api/v1/greetings/random');
  return data
});

const greetingSlice = createSlice({
  name: 'random greeting',
  initialState: {
    greeting: {},
  },
  reducers: {},
  extraReducers: {
    [getGreeting.fulfilled]: (state, { payload }) => {
      state.greeting = payload.greeting;
    }
  }
})

export {greetingSlice, getGreeting};