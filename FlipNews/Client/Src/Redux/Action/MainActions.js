import { CREATE_TAB, FETCH_NEWS, LOGIN, WEB_LINK } from "./types";
import axios from "axios";

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
