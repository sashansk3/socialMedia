import React from 'react'
import "./styles/owervievCard.scss"

export default function OwervievCard(props) {
  const {title, image, incImage, count, increment, light} = props

  return (
    <div className={`owerview-card owerview-card_${light}`}>
      <div className={`owerview-card__first-line owerview-card__first-line_${light}`}>
        {title} {image}
      </div>

      <div className="owerview-card__second-line">
        <span className={`count count_${light}`}>{count}</span>
        <div className={"owerview-card__increment_" + (increment > 0?"positive":"negative")}>
          {incImage} {Math.abs(increment)}%
        </div>
      </div>
    </div>
  )
}