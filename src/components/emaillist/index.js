import React, { useState, useEffect } from "react";
// import axios from "axios";
import "../../styles/emaillist.scss";
import EmailView from "../emailview";
import Header from "../header";

const EmailList = () => {
  const [emailList, emailValue] = useState([]);
  const [stateId, stateValue] = useState(false);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = () => {
    fetch("https://flipkart-email-mock.now.sh/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        emailValue(data.list);
      });
  };

  const listId = (id) => {
    console.log("inside id", id);
    fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("details", data);
        stateValue(data);
      });
  };

  return (
    <React.Fragment>
      <Header />
      <div className={"main-list"}>
        <div className={stateId ? "card-div" : "new-list"}>
          {emailList.map((listData) => {
            return (
              <div
                onClick={() => listId(listData.id)}
                className="list-card"
                key={listData.id}
              >
                <div className="avatar">
                  <span>{listData.from.email[0]}</span>
                </div>
                <div className="inner-list">
                  <h3>
                    From:{" "}
                    <b>
                      {listData.from.name} {"<"}
                      {listData.from.email}
                      {">"}
                    </b>
                  </h3>
                  <h3>
                    Subject: <b>{listData.subject}</b>
                  </h3>
                  <p>{listData.short_description}</p>
                  <p>
                    {Intl.DateTimeFormat("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    }).format(listData.date)}
                  </p>
                </div>
                {/* <EmailView id={id} /> */}
              </div>
            );
          })}
        </div>
        {stateId ? <EmailView id={stateId} /> : null}
      </div>
    </React.Fragment>
  );
};

// class EmailList extends React.Component {
//   state = {
//     emailList: [],
//     stateId: false,
//   };
//   componentDidMount() {
//     this.loadList();
//   }

//   loadList = () => {
//     fetch("https://flipkart-email-mock.now.sh/")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           emailList: data.list,
//         });
//       });
//   };

//   listId = (id) => {
//     console.log("inside id", id);
//     fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log("details", data);
//         this.setState({
//           stateId: data,
//         });
//       });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div className={"main-list"}>
//           <div className={this.state.stateId ? "card-div" : "new-list"}>
//             {this.state.emailList.map((listData) => {
//               return (
//                 <div
//                   onClick={() => this.listId(listData.id)}
//                   className="list-card"
//                   key={listData.id}
//                 >
//                   <div className="avatar">
//                     <span>{listData.from.email[0]}</span>
//                   </div>
//                   <div className="inner-list">
//                     <h3>
//                       From:{" "}
//                       <b>
//                         {listData.from.name} {"<"}
//                         {listData.from.email}
//                         {">"}
//                       </b>
//                     </h3>
//                     <h3>
//                       Subject: <b>{listData.subject}</b>
//                     </h3>
//                     <p>{listData.short_description}</p>
//                     <p>
//                       {Intl.DateTimeFormat("en-US", {
//                         day: "2-digit",
//                         month: "2-digit",
//                         year: "2-digit",
//                       }).format(listData.date)}
//                     </p>
//                   </div>
//                   {/* <EmailView id={this.state.id} /> */}
//                 </div>
//               );
//             })}
//           </div>
//           {this.state.stateId ? <EmailView id={this.state.stateId} /> : null}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

export default EmailList;
