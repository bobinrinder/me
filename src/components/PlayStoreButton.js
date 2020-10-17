import React from "react"

const PlayStoreButton = ({
  href,
  width = 190,
  alt = "Get it on Google Play",
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        width={width}
        alt={alt}
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />
    </a>
  )
}

export default PlayStoreButton
