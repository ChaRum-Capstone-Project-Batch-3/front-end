import { Breadcrumb, Card, Skeleton } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserDetails } from "../../../components/cardpost/userDetails/UserDetails";
import { getUser } from "../../../store/users/UserSlicer";

const DetailReportUser = () => {
  const param = useParams();
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getUser(param.id));
  }, []);

  const response = useSelector((state) => state.user.data.user);
  const loader = useSelector((state) => state.user.fecthStatus);

  return (
    <div className="table">
      <div className="content-main manage-thread-table">
        <div className="header-table">
          <div className="header-text">
            <span>Details Report</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item className="breadcrumb-text">
                Manage Thread
              </Breadcrumb.Item>
              <Breadcrumb.Item className="manageThread">
                Thread Report
              </Breadcrumb.Item>
              <Breadcrumb.Item className="manageThread">
                Details Report
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="body">
          {loader !== "loading" ? (
            <div className="details-thread">
              <UserDetails response={response} />
            </div>
          ) : (
            <Card>
              <Skeleton
                avatar
                active
                className="skeleton"
                paragraph={{ width: 1200 }}
              ></Skeleton>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailReportUser;