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

export default function SignUp() {
  const router = useRouter()
  const [hasError, setHasError] = useState(false);
  const [registerData, setRegisterData] = useState<RegisterType>({
    email: "",
    password: "",
  });

  function setReg() {
    try {
      if (
        registerData.email === "" ||
        registerData.password === ""
      ) {
        setHasError(true);
        throw new Error(
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
        );
      }
      register(registerData)
        .then(() => router.replace("/signin"))
    } catch (error: any) {
      setHasError(error.message);
      console.error(error);
      setTimeout(() => {
        setHasError(false);
      }, 2000);
    }
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
            <button
              className={styles.modalBtnSignup}
              onClick={(e) => {
                e.preventDefault();
                setReg();
              }}>
              <Link href={'/signup'}>Зарегистрироваться</Link>
            </button>
          </Form>
        </ModalBlock>
      </Container>
    </Wrapper >
  )
}