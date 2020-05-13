export const fetchEmail = () => {
  return (dispatch) => {
    fetch("https://flipkart-email-mock.now.sh/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data && data) {
          dispatch({
            type: "FETCH_EMAIL",
            emailInfo: data.list,
          });
          // if (fromCreateEvent) {
          //   dispatch({
          //     type: types.CREATE_EVENT
          //   });
          // }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
