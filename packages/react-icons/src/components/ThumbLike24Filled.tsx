import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ThumbLike24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.06 9c.46-1.42.69-2.67.69-3.75 0-2.4-.94-4.25-2.5-4.25-.85 0-1.1.5-1.44 1.75a65.45 65.45 0 01-.77 2.72L8.17 9.95a5.88 5.88 0 01-2.85 2.33l-1.26.48c-.79.3-1.25 1.13-1.09 1.97l.69 3.54c.16.86.82 1.55 1.67 1.75l8.25 2.03a4.75 4.75 0 005.73-3.44l1.58-6.18A2.75 2.75 0 0018.22 9h-3.16z" fill={primaryFill} /></svg>;
};

export default ThumbLike24Filled;