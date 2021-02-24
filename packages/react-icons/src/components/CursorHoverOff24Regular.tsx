import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHoverOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.05 1.05A2.5 2.5 0 002 6.5v9A2.5 2.5 0 004.5 18H9v-1.5H4.5a1 1 0 01-1-1v-9a1 1 0 01.94-1L10 11.06v10.19a.75.75 0 001.37.42l2.46-3.58 4.05.85 2.84 2.84a.75.75 0 001.06-1.06L3.28 2.22zm8.22 10.34L15.94 17l-2.29-.48a.75.75 0 00-.77.3l-1.38 2.02v-6.28z" fill={primaryFill} /><path d="M20.5 15.5a1 1 0 01-.83.99l1.14 1.14A2.5 2.5 0 0022 15.5v-9A2.5 2.5 0 0019.5 4H7.18l1.5 1.5H19.5a1 1 0 011 1v9z" fill={primaryFill} /></svg>;
};

export default CursorHoverOff24Regular;