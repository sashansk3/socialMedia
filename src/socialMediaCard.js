import React from 'react'
import "./styles/socialMediaCard.scss"
export default function SocialMediaCard(props) {
  const {platform, peoples, increment, light} = props

  return (
    <div className={`social-card social-card_${light} ${platform.name}`}>
      <div className="social-card__header">
        {platform.image} {platform.nickname}
      </div>

      <div className="social-card__content">
        <p className={`social-card__content__count social-card__content__count_${light}`}>{peoples.count}</p>
        <p className={`social-card__content__type social-card__content__type_${light}`}>{peoples.type}</p>
      </div>

      <div className={`social-card__footer social-card__footer_${light} ${increment.count>0?"positive":"negative"}`}>
        {increment.image} {Math.abs(increment.count)} Today
      </div>
    </div>
  )
}