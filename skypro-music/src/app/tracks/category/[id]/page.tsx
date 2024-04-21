import { CategoryType, getSidePlaylists } from "@/app/api/sidebarAPI";
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
    <TracksLayout 
    tracks={sidePlaylists.items} 
    title={sidePlaylists.name} 
    hasSidebar={false} 
    hasFilters={false}
    favouriteList={false} />
  )
}