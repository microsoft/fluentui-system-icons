import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Delete16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4h3a.5.5 0 010 1h-.55l-.76 6.78A2.5 2.5 0 019.21 14H6.79a2.5 2.5 0 01-2.48-2.22L3.55 5H3a.5.5 0 010-1h3a2 2 0 114 0zM8 3a1 1 0 00-1 1h2a1 1 0 00-1-1zM6.5 7v4a.5.5 0 001 0V7a.5.5 0 00-1 0zM9 6.5a.5.5 0 00-.5.5v4a.5.5 0 001 0V7a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default Delete16Filled;