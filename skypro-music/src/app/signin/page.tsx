'use client'
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
import { login } from "../api/userAPI";
import Link from "next/link";

type LoginType = {
  email: string,
  password: string,
}

export default function SignIn() {
  const router = useRouter()
  const [hasError, setHasError] = useState(false);
  const [loginData, setLoginData] = useState<LoginType>({
    email: "",
    password: "",
  });

  function setLogin() {
    try {
      if (
        loginData.email === "" ||
        loginData.password === ""
      ) {
        setHasError(true);
        throw new Error(
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
        );
      }
      login(loginData)
        .then(() => router.replace("/tracks"))
    } catch (error: any) {
      setHasError(error.message);
      console.error(error);
      setTimeout(() => {
        setHasError(false);
      }, 2000);
    }
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
                  <button disabled className={styles.modalBtnEnter}>
                    Войти
                  </button>
                </>
              ) : (
                <button
                  className={styles.modalBtnEnter}
                  onClick={(e) => {
                    e.preventDefault();
                    setLogin();
                  }}>
                  Войти
                </button>
              )}
              <button className={styles.modalBtnSignup}>
                <Link href={'/signup'}>Зарегистрироваться</Link>
              </button>
            </Form>
          </ModalBlock>
        </Container>
      </Wrapper >
    </>
  )
}