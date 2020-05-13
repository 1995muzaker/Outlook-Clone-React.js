import React, { useEffect } from "react";
import "../../styles/emaillist.scss";
import EmailView from "../emailview";
import Header from "../header";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmail } from "../../actions/fetchEmail";
import { fetchId } from "../../actions/fetchId";

const EmailList = () => {
  const emailView = useSelector((state) => state.emailInfo);
  const emailId = useSelector((state) => state.selectedId);
  const dispatch = useDispatch();

  const getData = () => dispatch(fetchEmail);

  const getId = (id) => dispatch(fetchId(id));

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={"main-list"}>
        <div className={emailId ? "card-div" : "new-list"}>
          {emailView.map((listData) => {
            return (
              <div
                onClick={() => getId(listData.id)}
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
              </div>
            );
          })}
        </div>
        {emailId ? <EmailView id={emailId} /> : null}
      </div>
    </React.Fragment>
  );
};

export default EmailList;
