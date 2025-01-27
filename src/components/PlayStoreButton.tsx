type IPlayStoreButton = {
  href: string | undefined;
  width?: number;
  height?: number;
  alt?: string | undefined;
};

const PlayStoreButton = ({
  href,
  width = 190,
  height = 74,
  alt = "Get it on Google Play",
}: IPlayStoreButton) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        width={width}
        height={height}
        alt={alt}
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />
    </a>
  );
};

export default PlayStoreButton;
