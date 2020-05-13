const INITIAL_STATE = {
  emailInfo: [],
  selectedId: false,
};

const emailInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_EMAIL": {
      return Object.assign({}, state, {
        emailInfo: action.emailInfo,
      });
    }
    case "FETCH_ID": {
      return Object.assign({}, state, {
        selectedId: action.selectedId,
      });
    }
    default:
      return state;
  }
};

export default emailInfo;
