import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail author="Tanmay" avatar={faker.image.avatar()} time="today at 1:00PM" comment="op" />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Aman" avatar={faker.image.avatar()} time="today at 3:00PM" comment="god"/>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Arjun" avatar={faker.image.avatar()} time="today at 5:00PM" comment="nice" />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />,document.querySelector('#root'));