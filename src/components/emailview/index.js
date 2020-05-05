import React from "react";
import "../../styles/emaillist.scss";

class EmailView extends React.Component {
  render() {
    console.log(this.props.id);
    return (
      <div className="email-view">
        {this.props.id ? (
          <div>
            <div className="favorite">
              <button>Mark as Favorite</button>
            </div>
            <p>{this.props.id.body}</p>
          </div>
        ) : (
          <div>Loading post...</div>
        )}
      </div>
    );
  }
}

export default EmailView;
