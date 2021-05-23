import axios from "axios";
import { laptonApi } from "../api/api";
import {
  getLabs,
  getLabsSuccess,
  getLabsFailure,
  getCurrentLab,
  getCurrentLabSuccess,
  getCurrentLabFailure,
} from "../features/labs/labsSlice";

export async function listLabs(dispatch) {
  dispatch(getLabs());

  try {
    const { data } = await axios.get(`${laptonApi}/api/resources/labs`);

    dispatch(getLabsSuccess(data));

    // TODO: store in local storage
  } catch (error) {
    console.log(error);
    dispatch(getLabsFailure(error));
  }
}

// export const subjectDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: AD_DETAILS_REQUEST });

//     const { data } = await axios.get(`${SERVER_URL}/api/advertisements/${id}`);

//     dispatch({
//       type: AD_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: AD_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.detail
//           ? error.response.data.detail
//           : error.message,
//     });
//   }
// };
