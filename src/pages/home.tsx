import React from 'react';
import './home.scss';
import header from '../images/header.png'

export const Home = () => {
  return (
    <div className='home'>
      <header style={{backgroundImage: `url(${header})`}}/>
      <main>
        <section className="section1">
          <div className="ddos">
            <h2>今日DDOS攻击态势</h2>
            <div className="chart"></div>
          </div>
        </section>
        <section className="section2">
          <div className="perception">
            <h2>网络态势整体感知</h2>
          </div>
          <div className="warning">
            <h2>红色预警</h2>
          </div>
        </section>
        <section className="section3">
          <div className="web">
            <h2>今日WEB攻击姿势</h2>
          </div>
        </section>
        <section className="section4">
          <div className="net">
            <h2>今日网络攻击姿势</h2>
          </div>
        </section>
        <section className="section5">
          <div className="host">
            <h2>今日主机攻击姿势</h2>
          </div>
        </section>
      </main>
    </div>
  );
};
