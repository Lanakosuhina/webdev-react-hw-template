import { StaredUser } from "@/app/api/trackAPI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  authState: boolean;
  user: StaredUser | null,
  tokens: TokenType,
};

export type TokenType = {
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
  tokens: {
    refresh: '',
    access: '',
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<TokenType>) => {
      state.tokens = action.payload
    },
    setUser: (state, action: PayloadAction<StaredUser | null>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem("userToken")
    },
  },
});

export const { setTokens, setUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
