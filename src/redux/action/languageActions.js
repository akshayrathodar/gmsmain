import { languageStore } from "../store/store";

export const changeLanguage = (language) => {
    languageStore.dispatch({
    type: "language/change",
    payload: language,
  });
};