/**
 * Action Types
 */

export const Types = {
  LOAD_REQUEST: "products/LOAD_REQUEST",
  LOAD_SUCCESS: "products/LOAD_SUCCESS",
  LOAD_FAILURE: "products/LOAD_FAILURE",
};

/**Initial State */
const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

/**Reducers */

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: false,
      };
    case Types.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
}

/**Actions */

export function loadRequest() {
  return {
    type: Types.LOAD_REQUEST,
  };
}

export function loadSuccess(data) {
  return {
    type: Types.LOAD_SUCCESS,
    data,
  };
}

export function loadFailure() {
  return {
    type: Types.LOAD_FAILURE,
  };
}
