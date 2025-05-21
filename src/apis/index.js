import axios from "axios";
import {
  BASE_URL,
  FETCH_LYRICS_URL,
  FETCH_TRACK_URL,
  SEARCH_URL,
  TOP_TEN_SONGS_URL,
} from "../constants";

export const fetchTopTenTracks = async () => {
  return axios
    .get(`${BASE_URL}${TOP_TEN_SONGS_URL}`)
    .then((response) => response)
    .catch((err) => err);
};

export const fetchSearchResults = async (query) => {
  return axios
    .get(`${BASE_URL}${SEARCH_URL}`, {
      params: {
        query,
      },
    })
    .then((response) => response)
    .catch((err) => err);
};

export const fetchLyrics = async (trackId) => {
  return axios
    .get(`${BASE_URL}${FETCH_LYRICS_URL}`, { params: { trackId } })
    .then((response) => response)
    .catch((err) => err);
};

export const fetchTrack = async (trackId) => {
  return axios
    .get(`${BASE_URL}${FETCH_TRACK_URL}`, { params: { trackId } })
    .then((response) => response)
    .catch((err) => err);
};
