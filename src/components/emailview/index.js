import React from "react";
import "../../styles/emaillist.scss";

class EmailView extends React.Component {
  state = {
    emailid: "",
  };
  componentDidMount() {
    this.loadView();
  }
  loadView = () => {
    let id = this.props.id;
    console.log("inside id", this.props.id);
    fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("details", data);
        this.setState({
          emailid: data,
        });
      });
  };

  render() {
    console.log(this.state.emailid);
    return (
      <div className="email-view">
        {this.state.emailid ? (
          <div>
            <div className="favorite">
              <button>Mark as Favorite</button>
            </div>
            <p>{this.state.emailid.body}</p>
          </div>
        ) : (
          <div>Loading post...</div>
        )}
      </div>
    );
  }
}

export default EmailView;
