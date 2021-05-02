import axios from "axios";
import { laptonApi } from "../api/api";
import {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
} from "../features/categories/categoriesSlice";
export async function listCategories(dispatch) {
  dispatch(getCategories());

  try {
    const { data } = await axios.get(`${laptonApi}/api/categories`);

    dispatch(getCategoriesSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getCategoriesFailure(error));
  }
}
