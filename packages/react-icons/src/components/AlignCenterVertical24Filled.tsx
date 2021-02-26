import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignCenterVertical24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 21.25a.75.75 0 001.5 0V20h2.5c1.24 0 2.25-1 2.25-2.25v-2.5c0-1.24-1-2.25-2.25-2.25h-2.5v-2h4.5c1.24 0 2.25-1 2.25-2.25v-2.5c0-1.24-1-2.25-2.25-2.25h-4.5V2.75a.75.75 0 00-1.5 0V4h-4.5C5.51 4 4.5 5 4.5 6.25v2.5c0 1.24 1 2.25 2.25 2.25h4.5v2h-2.5c-1.24 0-2.25 1-2.25 2.25v2.5c0 1.24 1 2.25 2.25 2.25h2.5v1.25z" fill={primaryFill} /></svg>;
};

export default AlignCenterVertical24Filled;