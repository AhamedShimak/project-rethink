/***
 * Constants
 */
import { version } from "../constants/index";

//to store always rendering data
const VERSION = "version";
export const APP_DATA_CATEGORIES = "categories";
export const APP_DATA_SUBJECTS = "subjects";
// export const APP_DATA_CATEGORIES = "categories";

//  Write the function checkIfDataExistsLocalStorage
export function checkIfDataExistsLocalStorage(key) {
  if (
    localStorage.getItem(key) === null ||
    localStorage.getItem(key) === "" ||
    localStorage.getItem(key) === undefined
  ) {
    return false;
  } else if (localStorage.getItem(key)) {
    return true;
  }
  return false;
}

export function setDataLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getDataLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
//wants to run only if data exists and versions are correct
export function checkLocalStorageVersion() {
  const storedVersion = getDataLocalStorage(VERSION);
  if (checkIfDataExistsLocalStorage(VERSION)) {
    if (Number(storedVersion) !== Number(version)) {
      localStorage.clear();
      setDataLocalStorage(VERSION, version);
    }
  } else {
    setDataLocalStorage(VERSION, version);
  }
}
