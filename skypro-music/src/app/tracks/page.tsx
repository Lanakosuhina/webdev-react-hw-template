import TracksLayout from "@/components/TracksLayout/TracksLayout";
import { getData } from "../api/trackAPI";

export default async function MainTracksPage() {
  const tracks = await getData();

  return (
    <TracksLayout tracks={tracks} title={'Треки'} hasSidebar={true} hasFilters={true} />
  );
}
