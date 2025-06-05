import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

// Load token from localStorage on initialization
const loadToken = () => {
  try {
    const token = localStorage.getItem('auth_token');
    return token;
  } catch (error) {
    console.error('Error loading token from localStorage:', error);
    return null;
  }
};

const initialState: AuthState = {
  token: loadToken(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem('auth_token', action.payload);
      } else {
        localStorage.removeItem('auth_token');
      }
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem('auth_token');
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export const authReducer = authSlice.reducer; 