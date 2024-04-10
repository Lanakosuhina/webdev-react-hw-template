const user_URL = 'https://skypro-music-api.skyeng.tech/user'

export type UserDataType = {
  email: string,
  password: string,
  username?: string,
}

export async function register({ email, password }: UserDataType) {
  const response = await fetch(`${user_URL}/signup/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  });

  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(JSON.stringify(responseData))
  }

  return responseData;

}

export async function login({ email, password }: UserDataType) {
  const response = await fetch(`${user_URL}/login/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })

  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(JSON.stringify(responseData))
  }

  localStorage.responseData = JSON.stringify(responseData);
  return responseData;
}

export async function getToken({ email, password }: UserDataType) {
  const response = await fetch(`${user_URL}/token/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })

  const token = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(token))
  }

  localStorage.token = JSON.stringify(token)
  return token;
}

export async function refreshToken({ token }: { token: string }) {
  const response = await fetch(`${user_URL}/token/refresh/`, {
    method: "POST",
    body: JSON.stringify({
      refresh: token
    }),
    headers: {
      "content-type": "application/json",
    },
  })

  const freshToken = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(freshToken))
  }

  return freshToken.access;
}