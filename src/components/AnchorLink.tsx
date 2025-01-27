import { Link } from "react-scroll";
import { ReactNode } from "react";

type AnchorLinkProps = {
  to: string;
  children: ReactNode;
  href?: string;
  activeClass?: string;
  className?: string;
  spy?: boolean;
  smooth?: boolean | string;
  offset?: number;
  duration?: number;
  [key: string]: unknown;
};

const AnchorLink = ({
  to,
  children,
  href = "",
  activeClass = "active",
  className = "",
  spy = true,
  smooth = true,
  offset = 0,
  duration = 500,
  ...rest
}: AnchorLinkProps) => {
  const ScrollLink = Link as any; // Explicitly cast to 'any' to bypass type issues

  return (
    <ScrollLink
      activeClass={activeClass}
      className={className}
      href={href || "#" + to}
      to={to}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
      {...rest}
    >
      {children}
    </ScrollLink>
  );
};

export default AnchorLink;
