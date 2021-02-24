import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicProhibited48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 12a8 8 0 1116 0v11a13.03 13.03 0 00-7.65 9H22a8 8 0 01-8-8V12zm8 23.25a11.5 11.5 0 01-11.5-11.5 1.25 1.25 0 10-2.5 0 14 14 0 0012.5 13.92v5.08a1.25 1.25 0 102.5 0v-2.74a12.95 12.95 0 01-1-4.76zM35 46a11 11 0 110-22 11 11 0 010 22zm0-2a9 9 0 007.03-14.62L29.38 42.03A8.96 8.96 0 0035 44zm-7.03-3.38l12.65-12.65a9 9 0 00-12.65 12.65z" fill={primaryFill} /></svg>;
};

export default MicProhibited48Filled;