'use client'
import { getAllFavourites } from "@/app/api/trackAPI";
import { getTokens } from "@/app/api/userAPI";
import { setFavouriteTracks } from "@/app/store/features/PlaylistSlice";
import TracksLayout from "@/components/TracksLayout/TracksLayout";
import React, { useEffect, useState } from "react";

export default function Favourite() {
  const [favouriteTracks, setFavouriteTracks] = useState([]);

  useEffect(() => {

    let token = localStorage.token ? JSON.parse(localStorage.token) : null;
    getAllFavourites({ accessToken: token })
      .then((res) => {
        console.log(res);
        setFavouriteTracks(res)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
  }, []);

  return (
    <TracksLayout
      tracks={favouriteTracks}
      title="Мои треки"
      hasSidebar={false}
      hasFilters={false}
     />
  )
}