import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const ExternalLink = ({ children, ...rest }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" {...rest}>
      {children} <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
    </a>
  )
}

export default ExternalLink
