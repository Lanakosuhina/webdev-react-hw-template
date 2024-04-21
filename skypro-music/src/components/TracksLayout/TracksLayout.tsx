import { Centerblock } from "@/components/Centerblock";
import { FilterWrapper } from "@/components/FilterWrapper";
import { Heading } from "@/components/Heading";
import Main from "@/components/Main/Main";
import { SearchBar } from "@/components/SearchBar";
import { CenterWrapper } from "@/components/CenterWrapper";
import { Sidebar } from "@/components/Sidebar";
import { Navigation } from "@/components/Navigation";
import { DataTrack } from "@/app/api/trackAPI";

type TracksLayoutType = {
  tracks: DataTrack[],
  title: string,
  hasSidebar: boolean,
  hasFilters: boolean,
  favouriteList: boolean,
}

export default function TracksLayout({ tracks, title, hasSidebar, hasFilters, favouriteList }: TracksLayoutType) {

  return (
    <>
      <Main>
        <Navigation />
        <CenterWrapper>
          <SearchBar />
          <Heading title={title} />
          <>{hasFilters && <FilterWrapper />}</>
          <Centerblock tracks={tracks} favouriteList={favouriteList} />
        </CenterWrapper>
        <Sidebar hasSidebar={hasSidebar} />
      </Main>

    </>
  );
}
