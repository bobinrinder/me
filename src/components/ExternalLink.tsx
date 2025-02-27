import { ReactNode, AnchorHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

type ExternalLinkProps = {
  children: ReactNode;
  showExternalIcon?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>; // Include all valid <a> tag attributes

const ExternalLink = ({
  children,
  showExternalIcon = true,
  ...rest
}: ExternalLinkProps) => {
  return (
    <a rel="noopener noreferrer" target="_blank" {...rest}>
      {children}{" "}
      {showExternalIcon && (
        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
      )}
    </a>
  );
};

export default ExternalLink;
