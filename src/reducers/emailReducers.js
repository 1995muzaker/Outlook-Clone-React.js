const INITIAL_STATE = {
  emailInfo: [],
};

const emailInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_EMAIL": {
      return Object.assign({}, state, {
        emailInfo: action.emailInfo,
      });
    }
    default:
      return state;
  }
};

export default emailInfo;
