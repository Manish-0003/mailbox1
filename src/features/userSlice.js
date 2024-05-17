import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value:null,
    
  },

  reducers: {
    signin: (state, action) => {
      state.value = action.payload;
    },
    signout: (state) => {
      state.value = null;
    },
    openMessage:(state,action) =>{
      state.selectedMessage = action.payload;
    }
  },
});

export const { signin, signout  } = userSlice.actions;


export const selectuser = (state) => state.user.value;
export default userSlice.reducer;
