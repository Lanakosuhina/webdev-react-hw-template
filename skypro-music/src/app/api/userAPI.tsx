const user_URL = 'https://skypro-music-api.skyeng.tech/user'

export type UserDataType = {
  email: string,
  password: string,
  username?: string,
}

export function register({ email, password, username }: UserDataType) {
  return fetch(`${user_URL}/signup/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка при получении данных")
      }
      return response.json()

    })
    .catch((error: Error) => {
      alert(error.message)
    })
    .then((json) => console.log(json));

}

export function login({ email, password }: UserDataType) {
  return fetch(`${user_URL}/login/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка при получении данных")
      }
      return response.json()

    })
    .catch((error: Error) => {
      alert(error.message)
    })
    .then((json) => console.log(json));
}

export function getToken({ email, password }: UserDataType) {
  return fetch(`${user_URL}/token/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json()).then(response => {
      if (!response.ok) {
        throw new Error("Ошибка при получении данных")
      }
      return response.json()

    })
    .catch((error: Error) => {
      alert(error.message)
    })
    .then((json) => console.log(json));
}

export function refreshToken() {
  return fetch(`${user_URL}/refresh/`, {
    method: "POST",
    body: JSON.stringify({
      refresh:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MTA0NjUzMSwiaWF0IjoxNjkwOTYwMTMxLCJqdGkiOiI2YTFhODg4Zjg5NjY0NjgyYTBmYWYyNjk4ZjZiNjViZSIsInVzZXJfaWQiOjc5Mn0.idHYiVKZqSxPCpNIvYpFgEs6nRTJ3FuPS60RAKV8XC8",
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}