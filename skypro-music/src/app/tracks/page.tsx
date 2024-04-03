import { Centerblock } from "@/components/Centerblock";
import { FilterWrapper } from "@/components/FilterWrapper";
import { Heading } from "@/components/Heading";
import Main from "@/components/Main/Main";
import { SearchBar } from "@/components/SearchBar";
import { CenterWrapper } from "@/components/CenterWrapper";
import { Sidebar } from "@/components/Sidebar";
import { Navigation } from "@/components/Navigation";
import TracksLayout from "@/components/TracksLayout/TracksLayout";
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
    <TracksLayout tracks={tracks} title={'Треки'} hasSidebar={true} hasFilters={true} />
  );
}
