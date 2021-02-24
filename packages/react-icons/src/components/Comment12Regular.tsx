import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Comment12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a1 1 0 00-1 1v4a1 1 0 001 1h.5c.28 0 .5.22.5.5v1.07l2.22-1.49A.5.5 0 016.5 8H9a1 1 0 001-1V3a1 1 0 00-1-1H3zM1 3c0-1.1.9-2 2-2h6a2 2 0 012 2v4a2 2 0 01-2 2H6.65l-2.87 1.92A.5.5 0 013 10.5V9a2 2 0 01-2-2V3z" fill={primaryFill} /></svg>;
};

export default Comment12Regular;