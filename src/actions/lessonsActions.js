import axios from "axios";
import { laptonApi } from "../api/api";
import {
  getLessons,
  getLessonsFailure,
  getLessonsSuccess,
  getCurrentLesson,
  getCurrentLessonFailure,
  getCurrentLessonSuccess,
} from "../features/lessons/lessonSlice";
export async function listLessons(dispatch, id) {
  dispatch(getLessons());

  try {
    const { data } = await axios.get(
      `${laptonApi}/api/resources/lessons/${id}`
    );

    dispatch(getLessonsSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getLessonsFailure(error));
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
