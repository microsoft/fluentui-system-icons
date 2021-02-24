import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceBlocked10Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5A5 5 0 100 5a5 5 0 0010 0zM9 5a4 4 0 01-6.45 3.16l5.61-5.61C8.69 3.22 9 4.08 9 5zM7.45 1.84L1.84 7.45a4 4 0 015.61-5.61z" fill={primaryFill} /></svg>;
};

export default PresenceBlocked10Regular;