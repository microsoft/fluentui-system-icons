import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier1X32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10a1 1 0 00-1.79-.62v.01a4.52 4.52 0 01-.2.23 13.26 13.26 0 01-3.02 2.52A1 1 0 009 13.86c.77-.46 1.44-.97 1.99-1.44V22a1 1 0 102 0V10zm4.7 6.3a1 1 0 00-1.4 1.4l1.79 1.8-1.8 1.8a1 1 0 001.42 1.4l1.79-1.79 1.8 1.8a1 1 0 001.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 00-1.42-1.4l-1.79 1.79-1.8-1.8z" fill={primaryFill} /></svg>;
};

export default Multiplier1X32Regular;