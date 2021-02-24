import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Ribbon16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1a5 5 0 100 10A5 5 0 008 1z" fill={primaryFill} /><path d="M5 14.5v-3.3a5.97 5.97 0 006 0v3.3a.5.5 0 01-.76.43L8 13.58l-2.24 1.35A.5.5 0 015 14.5z" fill={primaryFill} /></svg>;
};

export default Ribbon16Filled;