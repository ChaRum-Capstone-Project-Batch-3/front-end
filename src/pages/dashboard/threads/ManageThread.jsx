import { Breadcrumb } from "antd";
import React from "react";
import ThreadTable from "../../../components/table/ThreadTable";
import Filter from "../../../components/filtertopic/Filter";

const ManageThread = () => {
  return (
    <div className="site-layout-background">
      <div className="content-main manage-thread">
        <div className="header">
          <div className="header-text">
            <span>Thread Report</span>
          </div>
            <div className="bread-crumb">
              <Breadcrumb style={{ margin: '10px 0'}} separator="&#62;">
                <Breadcrumb.Item className="breadcrumb-text">Manage Thread</Breadcrumb.Item>
                <Breadcrumb.Item className= "manageThread">Thread Report</Breadcrumb.Item>
              </Breadcrumb>
              <div className="filter-thread">
              <Filter/>
              <Filter/>
              </div>
            </div>
            <div className="table-thread">
              <ThreadTable/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ManageThread;
