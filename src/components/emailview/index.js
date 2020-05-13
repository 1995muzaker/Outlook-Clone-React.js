import React from "react";
import "../../styles/emaillist.scss";

const EmailView = ({ id }) => {
  console.log(id);
  return (
    <div className="email-view">
      {id ? (
        <div>
          <div className="favorite">
            <button>Mark as Favorite</button>
          </div>
          <p>{id.body}</p>
        </div>
      ) : (
        <div>Loading post...</div>
      )}
    </div>
  );
};

export default EmailView;
