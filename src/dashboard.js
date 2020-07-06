import React from 'react'


import { ReactComponent as TwitterSvg } from './images/icon-twitter.svg';
import { ReactComponent as FacebookSvg } from './images/icon-facebook.svg';
import { ReactComponent as InstagramSvg } from './images/icon-instagram.svg';
import { ReactComponent as YoutubeSvg } from './images/icon-youtube.svg';
import { ReactComponent as DownSvg } from './images/icon-down.svg';
import { ReactComponent as UpSvg } from './images/icon-up.svg';

import SocialMediaCard from "./socialMediaCard"
import "./styles/dashboard.scss"

const cardsInf = [
  {
    platform: {
      image   : <FacebookSvg />,
      nickname: "@nathanf",
      name    : "facebook"
    },
    peoples: {
      count: 1987,
      type : "followers",
    },
    increment: {
      count: 12,
      image: <UpSvg />
    },
  },
  {
    platform: {
      image   : <TwitterSvg />,
      nickname: "@nathanf",
      name    : "twitter"
    },
    peoples: {
      count: 1044,
      type : "followers",
    },
    increment: {
      count:99,
      image: <UpSvg />
    },
  },
  {
    platform: {
      image   : <InstagramSvg />,
      nickname: "@realnathanf",
      name    : "instagram"
    },
    peoples: {
      count: "11k",
      type : "followers",
    },
    increment: {
      count: 1099,
      image: <UpSvg />
    },
  },
  {
    platform: {
      image   : <YoutubeSvg />,
      nickname: "Natha F",
      name    : "youtube"
    },
    peoples: {
      count: "8239",
      type : "subscribers",
    },
    increment: {
      count: -144,
      image: <DownSvg />
    },
  },
]

export default function Dashboard(props) {
  const {light, toggleLight} = props

  const toggleLightAction = () => {
    toggleLight(light === "dark"?"light":"dark")
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className={`dashboard__meta-text dashboard__meta-text_${light}`}>
          <p>Social Media Dashboard</p>
          Total Followers: 23,004
        </div>
        <div className={`dashboard__header-right dashboard__header-right_${light}`}>
          <span className="dashboard__light-type">{light} mode</span> 
          <div className={`dashboard__toggle dashboard__toggle_${light}`} onClick={toggleLightAction}>
            <div className={`dashboard__toggle__circle dashboard__toggle__circle_${light}`}>
            </div>
          </div>
        </div>
      </div>
      <div className={`dashboard__list dashboard__list_${light}`}>
        {cardsInf.map(({platform, peoples, increment}, id) => 
          <SocialMediaCard 
            key       = {id}
            platform  = {platform}
            peoples   = {peoples}
            increment = {increment}
            light     = {light}
          />
        )}     
      </div>
    </div>
  )
}