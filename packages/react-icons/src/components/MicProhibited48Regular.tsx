import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicProhibited48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 4a8 8 0 00-8 8v12a8 8 0 008.35 8c.22-.93.54-1.82.94-2.65A5.51 5.51 0 0116.5 24V12a5.5 5.5 0 1111 0v12l-.01.39c.78-.55 1.62-1.02 2.51-1.4V12a8 8 0 00-8-8zm0 31.25c.03 1.68.39 3.29 1 4.76v2.74a1.25 1.25 0 11-2.5 0v-5.08A14 14 0 018 23.75a1.25 1.25 0 112.5 0A11.5 11.5 0 0022 35.25zM35 46a11 11 0 110-22 11 11 0 010 22zm0-2a9 9 0 007.03-14.62L29.38 42.03A8.96 8.96 0 0035 44zm-7.03-3.38l12.65-12.65a9 9 0 00-12.65 12.65z" fill={primaryFill} /></svg>;
};

export default MicProhibited48Regular;