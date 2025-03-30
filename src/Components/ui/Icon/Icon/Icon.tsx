import React, { ReactNode } from "react";

export type TIconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  children?: ReactNode;
};

const Icon: React.FC<TIconProps> = ({
  className,
  width,
  height,
  color,
  children,
}) => {
  const iconWidth = width ?? 24;
  const iconHeight = height ?? 24;
  const iconColor = color ?? "#000";
  const iconClass = className ?? "";
  return (
    <svg
      className={iconClass}
      width={iconWidth}
      height={iconHeight}
      stroke={iconColor}
      viewBox="0 0 24 24"
      fill="none"
    >
      {children}
    </svg>
  );
};

export default Icon;
