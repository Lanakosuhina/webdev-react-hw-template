'use client'
import { Container } from "@/components/Container";
import Form from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import ModalBlock from "@/components/ModalBlock/ModalBlock";
import { Wrapper } from "@/components/Wrapper";
import styles from "./page.module.css"
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import modalLogo from "../../../public/img/logo_modal.png"
import { useState } from "react";
import { register } from "../api/userAPI";
import { useRouter } from 'next/navigation';

type RegisterType = {
  email: string,
  password: string,
}

type ErrorType = {
  email: string[],
  password: string[],
}

export default function SignUp() {
  const router = useRouter()
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<ErrorType>({
    email: [],
    password: [],
  });
  const [registerData, setRegisterData] = useState<RegisterType>({
    email: "",
    password: "",
  });

  function setReg() {
    setError({ email: [], password: [] })
    register({ email: registerData.email, password: registerData.password })
      .then(() => {
        router.replace('/signin');
      })
      .catch((error) => {
        setHasError(true);
        setError(JSON.parse(error.message));
        setTimeout(() =>
          setHasError(false), 2000)
      })
  }




  return (
    <Wrapper>
      <Container>
        <ModalBlock>
          <Form>
            <Link href={"/"}>
              <div className={styles.modalLogo}>
                <Image src={modalLogo} alt="logo" width={140} height={21} />
              </div>
            </Link>
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
              value={registerData.email}
              onChange={(e) => {
                setRegisterData({ ...registerData, email: e.target.value })
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
              value={registerData.password}
              onChange={(e) => {
                setRegisterData({ ...registerData, password: e.target.value })
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
              placeholder="Повторите пароль"
              value={registerData.password}
              onChange={(e) => {
                setRegisterData({ ...registerData, password: e.target.value })
              }}
            />
            {hasError ? (
              <>
                <div className={styles.errorText}>{hasError}</div>
                <button disabled className={styles.modalBtnErr}>
                  Зарегистрироваться
                </button>
              </>
            ) : (
              <button
                className={styles.modalBtnSignup}
                onClick={(e) => {
                  e.preventDefault();
                  setReg();
                }}>
                Зарегистрироваться
              </button>
            )}
          </Form>
        </ModalBlock>
      </Container>
    </Wrapper >
  )
}