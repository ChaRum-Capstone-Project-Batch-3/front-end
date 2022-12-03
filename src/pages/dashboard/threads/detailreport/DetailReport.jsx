import { Breadcrumb } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { UserPost } from "../../../../components/cardpost/UserPost";

const DetailReport = () => {
  const  param = useParams();

  // const { key, name, age, address } = param.id;


  console.log( param.id )

  return (
    <div className="site-layout-background">
      <div className="content-main manage-thread">
        <div className="header">
          <div className="header-text">
            <span>Details Report</span>
          </div>
            <div className="bread-crumb">
              <Breadcrumb style={{ margin: '10px 0'}} separator="&#62;">
                <Breadcrumb.Item className="breadcrumb-text">Manage Thread</Breadcrumb.Item>
                <Breadcrumb.Item className= "manageThread">Thread Report</Breadcrumb.Item>
                <Breadcrumb.Item className= "manageThread">Details Report</Breadcrumb.Item>
              </Breadcrumb>
            </div>
        </div>
        <div className="body">
          <div className="details-thread">
              <UserPost props={param.id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReport;
