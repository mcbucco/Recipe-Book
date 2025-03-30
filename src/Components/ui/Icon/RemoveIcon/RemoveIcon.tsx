import Icon, { TIconProps } from "../Icon/Icon";

const RemoveIcon: React.FC<TIconProps> = (props) => {
  const { width, height, color, className } = props;
  return (
    <Icon width={width} height={height} color={color} className={className}>
      <path
        d="M7 14H12"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 5.95996L3.25 2.20996"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.96002 2.25L3.21002 6"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10H15"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2H16C19.33 2.18 21 3.41 21 7.99V16"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9.01001V15.98C3 19.99 4 22 9 22H12C12.17 22 14.84 22 15 22"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 16L15 22V19C15 17 16 16 18 16H21Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default RemoveIcon;
