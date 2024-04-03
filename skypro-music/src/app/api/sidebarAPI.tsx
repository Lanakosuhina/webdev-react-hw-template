import { DataTrack } from "./trackAPI"

export type CategoryType = {
  id: number,
  items: DataTrack[],
  owner: {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
  },
  name: string, 
}

const sidebar_URL = "https://skypro-music-api.skyeng.tech/catalog/selection/";
export async function getPlaylists(): Promise<CategoryType[]> {
  const response = await fetch(sidebar_URL, {
    method: "GET",
  })
  if (!response.ok) {
    throw new Error("Ошибка при получении данных")
  }
  return response.json()

}

export async function getSidePlaylists(id: string): Promise<CategoryType> {
  const response = await fetch(sidebar_URL + id, {
    method: "GET",
  })
  if (!response.ok) {
    throw new Error("Ошибка при получении данных")
  }
  return response.json()

}
