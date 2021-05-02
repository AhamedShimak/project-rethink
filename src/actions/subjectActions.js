import axios from "axios";
import { laptonApi } from "../api/api";
import {
  getSubjects,
  getSubjectsFailure,
  getSubjectsSuccess,
} from "../features/subjects/subjectSlice";
export async function listSubjects(dispatch) {
  dispatch(getSubjects());
  try {
    const { data } = await axios.get(`${laptonApi}/api/subjects`);

    dispatch(getSubjectsSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getSubjectsFailure(error));
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
