import React, { useState } from "react";
import { Avatar, Card, Image, Skeleton } from "antd";
import { DetailsChart } from '../../chart/DetailsChart'
import total from '../assets/information.svg'
import reached from '../assets/user-square.svg'
import like from '../assets/like-tag.svg'
import massage from '../assets/messages.svg'
import share from '../assets/share.svg'
import receipt from '../assets/receipt-square.svg'

const ReadMore = ({children}) =>{
  const [isReadMore, setIsReadMore] = useState(true);
  const text = children;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide" style={{ 'color' : '#989797' }}>
        {isReadMore ? " ...Read more" : " Show less"}
      </span>
    </p>
  );
}

export const UserThread = ({data}) => {

  // props data
  const { key, name, address, age } = data

  return (
    <>
    <div className="main-card">
          <Card
            className="card"
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
          >
            <div className="card-header">
              <Avatar
                size={{ md: 38, lg: 40, xl: 60, xxl: 60 }}
                src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
              />
              <div className="header-title">
                <h3> {name} </h3>
                <p> Saturday, 20 of August 2022 </p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-title">
                <div className="content-class">Education</div>
                {address}
              </div>
              <Image
                className="image"
                src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                preview={false}
                sizes={{ xs: 24, sm: 32, md: 40, lg: 54, xl: 60 }}
              />
              <ReadMore>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                alias error id corporis iste culpa maiores? In, atque inventore
                temporibus distinctio dicta quos nemo magnam, corrupti neque ad
                accusamus explicabo! Fugit, delectus voluptatem! Obcaecati
                inventore officia omnis asperiores tenetur autem recusandae
                numquam temporibus. Provident id porro enim, ipsam explicabo
                dignissimos. Vero libero quibusdam quia possimus iure, consequatur
                dolorum vel asperiores? Quidem ducimus cupiditate obcaecati ad
                reprehenderit, voluptatibus aut non vitae animi fugit nobis
                dignissimos quisquam accusantium veritatis possimus. Eligendi sed
                officiis rem consequatur voluptatem cum ullam ipsum reprehenderit
                dignissimos voluptatibus! Delectus numquam quod amet. Tenetur rem
                optio eaque nam provident deleniti! Pariatur facilis odit sequi
                optio ex, sint reprehenderit autem necessitatibus quasi deserunt
                obcaecati ducimus quam asperiores deleniti est tenetur! Vero
                consectetur eveniet autem blanditiis vel tempore sequi distinctio
                officia nemo. Architecto eaque tempora ex in veritatis alias
                dolorum nesciunt excepturi labore doloremque mollitia dignissimos,
                nisi quibusdam molestiae explicabo praesentium.
              </ReadMore>
            </div>
          </Card>

          <div className="interaction">
            <Card
              className="thread-interaction card"
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
              bodyStyle={{
                'padding' : '0px',
              }}
            >
              <div className="interaction-header">
                <h1> Thread Interaction</h1>
              </div>
              <Card
                className="interaction-body"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
                bodyStyle={{
                  'padding' : '0px',
                  'gap' : '20px',
                  'display' : 'flex',
                  'marginBottom' : '8px'
                }}
              >

                  <Card
                    className="card total-reports"
                    bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                  >
                    <img
                      src={total}
                      alt='total'
                    />
                    <h2> Total Reports</h2>
                    <h1> 2.477 </h1>
                  </Card>
                  <Card
                    className="card account-reached"
                    bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                  >
                    <img
                      src={reached}
                      alt='reached'
                    />
                    <h2> Account Reached</h2>
                    <h1> 2.477</h1>
                  </Card>
              </Card>
              <Card
                className="interaction-footer"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
                bodyStyle={{
                  'padding' : '0px',
                  'gap' : '20px',
                  'display' : 'flex',
                }}
              >
                  <Card
                    className="card total-likes"
                    bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                  >
                    <h2>Likes</h2>
                    <div className="like">
                      <img
                        src={like}
                        alt='total'
                      />
                      <h1> 2.477 </h1>
                    </div>
                  </Card>
                  <Card
                    className="card total-comments"
                    bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                  >
                    <h2>Comment</h2>
                    <div className="comment">
                      <img
                        src={massage}
                        alt='reached'
                      />
                      <h1> 2.477</h1>
                    </div>
                  </Card>
                  <Card
                    className="card total-likes shares"
                    bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                  >
                    <h2>Shares</h2>
                    <div className="like">
                      <img
                        src={share}
                        alt='total'
                      />
                      <h1> 2.477 </h1>
                    </div>
                  </Card>
                  <Card
                    className="card total-comments bookmark"
                    bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                  >
                    <h2>Bookmark</h2>
                    <div className="comment">
                      <img
                        src={receipt}
                        alt='reached'
                      />
                      <h1> 2.477</h1>
                    </div>
                  </Card>
              </Card>
            </Card>

            <div className="card-details-report">
              <Card
                className=" card details-report"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
                bodyStyle={{
                  'padding' : '0px',
                }}
              >
              <div className="interaction-header">
                <h1> Details Report</h1>
              </div>
              <div className="chart-body">
                <DetailsChart/>
              </div>
              </Card>
            </div>
          </div>
          </div>
    </>
  )
}