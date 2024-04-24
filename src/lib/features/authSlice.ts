import { createSlice } from "@reduxjs/toolkit";

const storedProfile = localStorage.getItem("Profile");

const initialValue = {
  access_token: localStorage.getItem("Token"),
  profile: storedProfile ? JSON.parse(storedProfile) : null
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialValue,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
      localStorage.setItem('Token', action.payload);
    },
    setProfileDetails: (state, action) => {
      localStorage.setItem('Profile', JSON.stringify(action.payload));
      state.profile = JSON.stringify(action.payload);
    },
    logOut: (state, action) => {
      localStorage.removeItem('Token');
      localStorage.removeItem('Profile');
      state.access_token = null;
      state.profile = null;
    }
  }
});

export const { setToken, logOut, setProfileDetails } = authSlice.actions;
export default authSlice.reducer;
