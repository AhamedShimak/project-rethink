import axios from "axios";
import { laptonApi } from "../api/api";
import {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
} from "../features/categories/categoriesSlice";
import {
  checkIfDataExistsLocalStorage,
  APP_DATA_CATEGORIES,
  setDataLocalStorage,
  getDataLocalStorage,
} from "./../localStorage/index";
export async function listCategories(dispatch) {
  dispatch(getCategories());

  try {
    if (checkIfDataExistsLocalStorage(APP_DATA_CATEGORIES)) {
      const data = await getDataLocalStorage(APP_DATA_CATEGORIES);
      console.log(data);
      dispatch(getCategoriesSuccess(data));
    } else {
      const { data } = await axios.get(`${laptonApi}/api/categories`);
      dispatch(getCategoriesSuccess(data));
      setDataLocalStorage(APP_DATA_CATEGORIES, data);
    }
  } catch (error) {
    console.log(error);
    dispatch(getCategoriesFailure(error));
  }
}
