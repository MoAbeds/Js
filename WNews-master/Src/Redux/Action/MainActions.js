import {
  CREATE_TAB,
  FETCH_NEWS,
  LOGIN,
  WEB_LINK,
  FETCH_ALL_NEWS,
  COUNTRY_CHOOSE,
  OVERLAY_OPEN
} from "./types";
import axios from "axios";

const News_Api = "dc61d0c8f9c24284918297c9808de25e";

export function login() {
  return {
    type: LOGIN
  };
}

export function CreateTab(state) {
  return {
    type: CREATE_TAB,
    payload: state
  };
}

export function FetchNews(state) {
  return {
    type: FETCH_NEWS,
    payload: state
  };
}

export function SendWebLink(state) {
  return {
    type: WEB_LINK,
    payload: state
  };
}

export function ShowOverLay() {
  return {
    type: OVERLAY_OPEN
  };
}

export function ChooseCountry(state) {
  return {
    type: COUNTRY_CHOOSE,
    payload: state
  };
}

export async function fETCH_All_News() {
  const Url = `https://newsapi.org/v2/everything?&from=2019-11-17&sortBy=publishedAt&apiKey=${News_Api}`;

  const Articles = axios.get(Url).then(Res => {
    return Res.data.articles;
  });

  return {
    type: FETCH_ALL_NEWS,
    payload: Articles
  };
}
