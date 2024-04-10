import { StaredUser } from "@/app/api/trackAPI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  authState: boolean;
  user: StaredUser,
  token: TokenType,
};

type TokenType = {
  refresh: string,
  access: string,
}

const initialState: AuthStateType = {
  authState: false,
  user: {
    email: '',
    first_name: '',
    id: 0,
    last_name: '',
    username: '',
  },
  token: {
    refresh: '',
    access: '',
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<TokenType>) => {
      state.authState = !state.authState;
      state.token = action.payload
    },
    setUser: (state, action: PayloadAction<StaredUser>) => {
      state.user = action.payload;
    },
    // setUser: (state, action: PayloadAction<StaredUser[] | null>) => {
    //   state.user = action.payload;
    //   localStorage.setItem('user', JSON.stringify(action.payload));
    // },
    // logout: (state) => {
    //   state.user = null;
    //   localStorage.removeItem('user');
    // },
  },
});

export const { setAuthState, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
