import { DataTrack } from "@/app/api/trackAPI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TrackListType = {
  tracks: DataTrack[],
  isShuffled: boolean,
  shuffledTracks: DataTrack[],
  currentTrack: null | DataTrack,
  isPlaying: boolean,
  filterOptions: {
    authors: string[],
    years: string[],
    genres: string[],
    searchValue: string,
  };
  filteredTracks: [] | DataTrack[],
  isFiltered: boolean,
  favouriteTracks: DataTrack[] | [],
}

type SetCurrentTrack = {
  currentTrack: DataTrack;
  tracks: DataTrack[],
}

const initialState: TrackListType = {
  tracks: [],
  isShuffled: false,
  shuffledTracks: [],
  currentTrack: null,
  isPlaying: true,
  filterOptions: {
    authors: [],
    years: [],
    genres: [],
    searchValue: "",
  },
  filteredTracks: [],
  isFiltered: false,
  favouriteTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<DataTrack[]>) => {
      state.tracks = action.payload; // полезная нагрузка
    },
    toggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setCurrentTrack: (state, action: PayloadAction<SetCurrentTrack>) => {
      state.currentTrack = action.payload.currentTrack;
      state.tracks = action.payload.tracks;
      state.shuffledTracks = [...action.payload.tracks].sort(
        () => 0.5 - Math.random(),
      )
    },
    nextTrack: changeTrack(1),
    prevTrack: changeTrack(-1),
    toggleIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setFilteredTracks: (
      state,
      action: PayloadAction<{
        authors?: string[];
        years?: string[];
        genre?: string[];
        searchValue?: string;
      }>
    ) => {
      state.filterOptions = {
        authors: action.payload.authors || state.filterOptions.authors,
        years: action.payload.years || state.filterOptions.years,
        genres: action.payload.genre || state.filterOptions.genres,
        searchValue: action.payload.searchValue || "",
      };
      state.filteredTracks = state.tracks.filter((track) => {
        const hasAuthor = state.filterOptions.authors.length !== 0;
        const hasYear = state.filterOptions.years.length !== 0;
        const hasGenre = state.filterOptions.genres.length !== 0;
        const hasSearchValue = state.filterOptions.searchValue !== "";

        const isAuthors = hasAuthor ? state.filterOptions.authors.includes(track.author) : true
        const isGenres = hasGenre ? state.filterOptions.genres.includes(track.genre) : true
        const isYears = hasYear ? state.filterOptions.years.includes(track.release_date) : true
        const isSearchValueIncluded =
          track.name
            .toLowerCase()
            .includes(state.filterOptions.searchValue.toLowerCase());

        state.isFiltered = hasAuthor || hasGenre || hasSearchValue ? true : false;
        return isAuthors && isGenres && isSearchValueIncluded && isYears
      });
    },
    setFavouriteTracks: (state, action: PayloadAction<DataTrack[]>) => {
      state.favouriteTracks = action.payload;
    },
  },
});

function changeTrack(direction: number) {
  return (state: TrackListType) => {
    const currentTracks = state.isShuffled ? state.shuffledTracks : state.tracks;
    let newIndex = currentTracks.findIndex(item => item.id === state.currentTrack?.id) + direction;

    // Циклическое переключение. Ищет остаток от деления. Если достигаем конца - идем в начало списка
    newIndex = (newIndex + currentTracks.length) % currentTracks.length;

    state.currentTrack = currentTracks[newIndex];
    state.isPlaying = true;
  };
}

export const {
  setTracks,
  toggleShuffled,
  setCurrentTrack,
  nextTrack,
  toggleIsPlaying,
  prevTrack,
  setFilteredTracks,
  setFavouriteTracks,
} = playlistSlice.actions;
export const PlaylistReducer = playlistSlice.reducer;