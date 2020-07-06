import React from 'react'

import { ReactComponent as TwitterSvg } from './images/icon-twitter.svg';
import { ReactComponent as FacebookSvg } from './images/icon-facebook.svg';
import { ReactComponent as InstagramSvg } from './images/icon-instagram.svg';
import { ReactComponent as YoutubeSvg } from './images/icon-youtube.svg';
import { ReactComponent as DownSvg } from './images/icon-down.svg';
import { ReactComponent as UpSvg } from './images/icon-up.svg';

import OwervievCard from "./owervievCard"
import "./styles/owerviev.scss"

const owerviewCards = [
  {
    title    : "Page Views",
    count    : "87",
    increment: 3,
    incImage : <UpSvg />,
    image    : <FacebookSvg />,
  },
  {
    title    : "Likes",
    count    : "52",
    increment: -2,
    incImage : <DownSvg />,
    image    : <FacebookSvg />,
  },
  {
    title    : "Likes",
    count    : "5462",
    increment: 2257,
    incImage : <UpSvg />,
    image    : <InstagramSvg />,
  },
  {
    title    : "Profile Views",
    count    : "52k",
    increment: 1375,
    incImage : <UpSvg />,
    image    : <InstagramSvg />,
  },
  {
    title    : "Retweets",
    count    : "117",
    increment: 303,
    incImage : <UpSvg />,
    image    : <TwitterSvg />,
  },
  {
    title    : "Likes",
    count    : "507",
    increment: 553,
    incImage : <UpSvg />,
    image    : <TwitterSvg />,
  },
  {
    title    : "Likes",
    count    : "107",
    increment: -19,
    incImage : <DownSvg />,
    image    : <YoutubeSvg />,
  },
  {
    title    : "Total Views",
    count    : "1407",
    increment: -12,
    incImage : <DownSvg />,
    image    : <YoutubeSvg />,
  },
]

export default function Owerview(props) {
  const light = props.light

  return (
    <div className="owerview">
      <div className="owerview__header">
        Overview - Today
      </div>
      <div className="owerview__list">
        {owerviewCards.map(({title, count, increment, incImage, image}, id) => 
          <OwervievCard
            key       = {id}
            title     = {title}
            count     = {count}
            increment = {increment}
            incImage  = {incImage}
            image     = {image}
            light     = {light}
          />
        )}
      </div>
    </div>
  )
}