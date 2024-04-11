'use client'
import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";

type WithAuthProps = {
  isAuth: boolean;
};

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithAuth: ComponentType<P & WithAuthProps> = (props) => {
    const router = useRouter();

    const isAuth = !!localStorage.getItem("userToken"); 

    useEffect(() => {
      if (!isAuth) {
        router.replace("/signin"); 
      }
    }, [isAuth, router]);

    return isAuth ? <WrappedComponent {...(props as P)} /> : null; // Рендер компонента, если пользователь аутентифицирован
  };

  return WithAuth;
};

export default withAuth;

