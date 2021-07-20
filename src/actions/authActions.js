import axios from "axios";
import { laptonDynApi } from "../api/api";
import {
  createRegReq,
  createRegReqSuccess,
  createRegReqFailure,
} from "../features/auth/authSlice";

export async function register(dispatch) {
  dispatch(createRegReq());

  try {
    const { data } = await axios.post(`${laptonDynApi}/api/registerReq`);
    console.log(data);
    dispatch(createRegReqSuccess(data));

    // TODO: store in local storage
  } catch (error) {
    // console.log(error);
    dispatch(createRegReqFailure(error));
  }
}
