import ButtonEnter from "@/components/ButtonEnter/ButtonEnter";
import ButtonSignUp from "@/components/ButtonSignUp/ButtonSignUp";
import { Container } from "@/components/Container";
import Form from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import ModalBlock from "@/components/ModalBlock/ModalBlock";
import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import styles from "./page.module.css"
import classNames from "classnames";

export default function SignIn() {
  return (
    <Wrapper>
    <Container>
      <ModalBlock>
        <Form>
          <a href="../">
            <div className={styles.modalLogo}>
              <Image src="../img/logo_modal.png" alt="logo" width={140} height={21}/>
            </div>
          </a>
          <Input
            className={classNames(styles.modalInput, styles.login)}
            type="text"
            name="login"
            placeholder="Почта"
          />
          <Input
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <ButtonEnter text="Войти" />
          <ButtonSignUp text="Зарегистрироваться" />
        </Form>
      </ModalBlock>
    </Container>
  </Wrapper>
  )
}