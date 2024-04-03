import { CategoryType, getSidePlaylists } from "@/app/api/sidebarAPI";
import { DataTrack } from "@/app/api/trackAPI";
import { Centerblock } from "@/components/Centerblock";
import { FilterWrapper } from "@/components/FilterWrapper";
import { Heading } from "@/components/Heading";
import TracksLayout from "@/components/TracksLayout/TracksLayout";
import React from "react";

type CategoryPropsType = {
  params: {
    id: string;
  }
}

export default async function Category({ params }: CategoryPropsType) {
  let sidePlaylists: CategoryType;
  try {
    sidePlaylists = await getSidePlaylists(params.id);
  } catch (error: any) {
    throw new Error(error.message);
  }
  return (
    <TracksLayout tracks={sidePlaylists.items} title={sidePlaylists.name} hasSidebar={false} hasFilters={false} />

    // <>
    //   <Heading title={sidePlaylists.name} />
    //   <Centerblock tracks={sidePlaylists.items} />
    // </>
  )
}