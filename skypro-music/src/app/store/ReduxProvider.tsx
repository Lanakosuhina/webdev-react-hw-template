'use client'

import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "./store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) { // если стора нет, то мы его создадим\\ чтобы при ререндере store каждый раз не обновлялся
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

// выносим в отдельный компонент, чтобы он стал клиентским и children не наследовал клиент.
// чтобы большая часть компонентов была серверными

// useRef - может хранить в себе ссылку на ДОМ-элемент
// можем хранить значение, которое не измениться при ререндере