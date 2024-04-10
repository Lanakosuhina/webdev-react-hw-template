'use client'
import "./globals.css";
import { Container } from "@/components/Container";
import Form from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import ModalBlock from "@/components/ModalBlock/ModalBlock";
import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import styles from "./page.module.css"
import classNames from "classnames";
import modalLogo from "../../../public/img/logo_modal.png"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, login } from "../api/userAPI";
import Link from "next/link";
import { useAppDispatch } from "../hooks/hooks";
import { setAuthState, setUser } from "../store/features/AuthSlice";

type LoginType = {
  email: string,
  password: string,
}

type ErrorType = {
  email: string[],
  password: string[],
  detail: string,
}

export default function SignIn() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<ErrorType>({
    email: [],
    password: [],
    detail: "",
  });

  const [loginData, setLoginData] = useState<LoginType>({
    email: "",
    password: "",
  });

  function setLogin() {

    setError({ email: [], password: [], detail: "" })
    login({ email: loginData.email, password: loginData.password })
      .then((data) => { // регистрируем
        dispatch(setUser(data));
      })
      .then(() => // получаем токен
        getToken({ email: loginData.email, password: loginData.password }
        ))
      .then((data) => { // обновляем состояние, переводим на треки
        dispatch(setAuthState(data))
        router.replace('/');
      })
      .catch((error) => {
        setHasError(true);
        setError(JSON.parse(error.message));
        setTimeout(() =>
          setHasError(false), 2000)
      })
  }


  return (
    <>
      <Wrapper>
        <Container>
          <ModalBlock>
            <Form>
              <div className={styles.modalLogo}>
                <Image src={modalLogo} alt="logo" width={140} height={21} />
              </div>
              {hasError ?
                <p className={styles.errorText}>
                  {error.email}
                </p>
                : <p></p>}
              <Input
                className={classNames(styles.modalInput, styles.login)}
                type="text"
                name="login"
                placeholder="Почта"
                value={loginData.email}
                onChange={(e) => {
                  setLoginData({ ...loginData, email: e.target.value })
                }}
              />
              {hasError ?
                <p className={styles.errorText}>
                  {error.password}
                </p>
                : <p></p>}
              <Input
                className={styles.modalInput}
                type="password"
                name="password"
                placeholder="Пароль"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData({ ...loginData, password: e.target.value })
                }}
              />
              {hasError ? (
                <>
                  <div className={styles.errorText}>{hasError}</div>
                  <button disabled className={styles.modalBtnErr}>
                    Войти
                  </button>
                </>
              ) : (<>
                <button
                  className={styles.modalBtnEnter}
                  onClick={(e) => {
                    e.preventDefault();
                    setLogin();
                  }}>
                  Войти
                </button>
                <button className={styles.modalBtnSignup}>
                  <Link href={'/signup'}>Зарегистрироваться</Link>
                </button>
              </>)}

            </Form>
          </ModalBlock>
        </Container>
      </Wrapper >
    </>
  )
}