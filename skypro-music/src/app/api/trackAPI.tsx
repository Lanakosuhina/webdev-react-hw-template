export interface DataTrack {
  album: string,
  author: string,
  duration_in_seconds: string,
  genre: string,
  id: number,
  logo: null,
  name: string,
  release_date: string,
  stared_user: StaredUser[],
  track_file: string,
}

interface StaredUser {
  email: string,
  first_name: string,
  id: number,
  last_name: string,
  username: string,
}

export function getAllTracks(): Promise<DataTrack[]> {
  return fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/", {
    method: "GET",
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка")
      }
      return response.json()

    })
    .catch((error: Error) => {
      alert(error.message)
    })

}
