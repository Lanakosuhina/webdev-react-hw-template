import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PlaylistReducer } from "./features/PlaylistSlice";
import { authReducer } from "./features/AuthSlice";

export const store = configureStore({
  reducer: combineReducers({
    playlist: PlaylistReducer,
    auth: authReducer,
  }),
})

// типо нашего хранилища
export type AppStore = typeof store

// С помощью ReturnType<typeof store.getState> мы получаем тип состояния, возвращаемого нашим хранилищем.
export type RootState = ReturnType<AppStore["getState"]>;


// Функция dispatch используется для отправки действий в хранилище, чтобы обновить состояние.
// С помощью typeof store.dispatch мы получаем точный тип функции dispatch для использования в нашем приложении.

export type AppDispatch = AppStore["dispatch"];

