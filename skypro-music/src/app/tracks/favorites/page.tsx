'use client'
import { getAllFavourites } from "@/app/api/trackAPI";
import { getToken } from "@/app/api/userAPI";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { setFavouriteTracks } from "@/app/store/features/PlaylistSlice";
import TracksLayout from "@/components/TracksLayout/TracksLayout";
import React, { useEffect } from "react";

export default function Favourite() {

  const favouriteTracks = useAppSelector((store) => store.playlist.favouriteTracks)
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.token ? JSON.parse(localStorage.token) : null;

        if (!token) {
          token = await getToken({ email: '', password: '' });
          localStorage.token = JSON.stringify(token);
        }

        const data = await getAllFavourites({ accessToken: token.access });
        dispatch(setFavouriteTracks(data));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TracksLayout tracks={favouriteTracks} title="Мои треки" hasSidebar={true} hasFilters={true} />
  )
}