import { Heading } from "@/components/Heading";
import { FilterWrapper } from "@/components/FilterWrapper";
import { Centerblock } from "@/components/Centerblock";

async function getData() {
  const res = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/");

  if (!res.ok) {
    throw new Error('Ошибка при получении данных');
  }
  return res.json()
}

export default async function MainTracksPage() {
  const tracks = await getData();

  return (
    <>
      <Heading text="Треки" />
      <FilterWrapper />
      <Centerblock tracks={tracks} />
    </>
  );
}
