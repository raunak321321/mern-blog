import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, message, Image } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { postsAPI } from "./../../api/api";
import "./Post.scss";
import defaultPostImage from "./../../assets/images/default-post-image.jpg";
import defaultUser from "./../../assets/images/default-user.png";
import moment from "moment";
import Avatar from "antd/lib/avatar/avatar";

export default function Post() {
  const [postData, setPostData] = useState({});
  const router = useHistory();
  const userState = useSelector((st) => st.user);
  const location = useLocation();
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletePostID, setDeletePostID] = useState(null);

  useEffect(() => {
    let id = null;
    (async () => {
      if (location.state && location.state.hasOwnProperty("postID")) {
        id = location.state.postID;
        try {
          const { data: res } = await postsAPI.getOne(id);
          console.log(res);
          setPostData(res);
        } catch (error) {
          console.log("Error retrieving one post...", error);
        }
      } else {
        message.error("Post ID was not provided");
        router.goBack();
      }
    })();
  }, [location.state]);

  return (
    <div className="view-post">
      <div className="post-header">
        <h1>{postData.title}</h1>
        <div className="two-cols">
          <div>
            <Avatar size="large" src={postData.userImageUrl ?? defaultUser} />
            &nbsp;
            {postData.createdByName}
          </div>
          <p>{moment(postData.createdAt).format("DD MMMM YYYY")}</p>
        </div>
      </div>
      <div className="centered-text">
        <Image
          src={postData.imagePath ? postData.imagePath : defaultPostImage}
        />
      </div>
      <div className="post-content">{postData.content}</div>
      {postData.createdBy === userState.user.id && (
        <div className="buttons-wrapper-horizontal">
          <Button
            htmlType="button"
            type="primary"
            icon={<EditFilled />}
            onClick={() => router.push("/posts/edit", { postID: postData._id })}
          >
            Edit Profile
          </Button>

          <Button
            htmlType="button"
            type="primary"
            icon={<DeleteFilled />}
            danger
            onClick={() => {
              setDeletePostID(postData._id);
              setDeleteModal(true);
            }}
          >
            Edit Profile
          </Button>
        </div>
      )}
    </div>
  );
}
