import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCircleDownRight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 1a5 5 0 100 10A5 5 0 008 3zm1.41 3h.1a.5.5 0 01.48.4l.01.1v3.02l-.01.09-.02.06-.03.08-.06.07-.04.05-.07.05-.06.03-.04.02-.06.02-.09.01H6.5a.5.5 0 01-.09-1H8.3L6.15 6.85a.5.5 0 01-.06-.64l.06-.06a.5.5 0 01.64-.06l.06.06L9 8.29V6.5a.5.5 0 01.41-.48l.1-.01h-.1z" fill={primaryFill} /></svg>;
};

export default ArrowCircleDownRight16Regular;