import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOn48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 12a8 8 0 1116 0v12a8 8 0 11-16 0V12zm8-5.5a5.5 5.5 0 00-5.5 5.5v12a5.5 5.5 0 1011 0V12A5.5 5.5 0 0024 6.5z" fill={primaryFill} /><path d="M25 37.71a14 14 0 0013-13.96 1.25 1.25 0 10-2.5 0 11.5 11.5 0 11-23 0 1.25 1.25 0 10-2.5 0 14 14 0 0012.5 13.92v5.08a1.25 1.25 0 102.5 0v-5.04z" fill={primaryFill} /></svg>;
};

export default MicOn48Regular;