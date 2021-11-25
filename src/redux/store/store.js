import { createStore } from "redux";
import { languageReducer } from '../reducer/reducer.js'

export const languageStore = createStore(languageReducer, "uk");