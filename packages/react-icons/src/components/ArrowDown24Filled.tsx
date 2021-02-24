import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDown24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.72 13.7a1 1 0 10-1.43-1.4L13 17.67V4a1 1 0 00-2 0v13.66L5.72 12.3a1 1 0 00-1.43 1.4l6.82 6.93c.5.5 1.3.5 1.78 0l6.83-6.93z" fill={primaryFill} /></svg>;
};

export default ArrowDown24Filled;