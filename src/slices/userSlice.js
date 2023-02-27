import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';

// login action
export const login = createAsyncThunk('users/login', async (email, password) => {
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/user/login', body, config);
    await localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (err) {
    console.log(err.response.data);
  }
});

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    loading: false,
    user: null
  },
  reducers: {},
  extraReducers: {
    // login reducers
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      setAuthToken(action.payload.token);
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export default userSlice.reducer;
