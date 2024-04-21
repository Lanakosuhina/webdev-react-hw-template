import { setTokens } from "../store/features/AuthSlice";
import { store } from "../store/store"
import { refreshToken } from "./userAPI";
export const api = async (url: string, options: RequestInit): Promise<any> => {
  const { access, refresh } = store.getState().auth.tokens
  const headers = { ...options.headers, Authorization: `Bearer ${access}`, };
  const response = await fetch(url, { ...options, headers });
  if (response.status === 401) {
    const newAccessToken = await refreshToken({ token: refresh })
    store.dispatch(setTokens({
      refresh,
      access: newAccessToken,
    }))
    return api(url, options);
  }
  return response;
}