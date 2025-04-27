import axios from "axios";
import { IPhoto } from "../types/photo";

export interface IUnsplashResponse {
  total: number;
  total_pages: number;
  results: IPhoto[];
}

const API_KEY = "PY0OcrbLB7wbYiTT8GOPo1TW2_-ELsSSNvf2az-AVvg";
const BASE_URL = "https://api.unsplash.com/";

export const getPhotosFromUnsplash = async (
  query: string,
  page: number
): Promise<IUnsplashResponse> => {
  try {
    const { data } = await axios.get<IUnsplashResponse>(
      `${BASE_URL}/search/photos/`,
      {
        params: {
          client_id: API_KEY,
          orientation: "landscape",
          page: page,
          query: query,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
    return {
      total: 0,
      total_pages: 0,
      results: [],
    };
  }
};