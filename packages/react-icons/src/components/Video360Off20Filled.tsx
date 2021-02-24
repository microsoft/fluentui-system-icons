import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Video360Off20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l1.18 1.19A1.7 1.7 0 002 5.7v8.6a1.7 1.7 0 001.97 1.68 37.94 37.94 0 0111.17-.13l2 2a.5.5 0 00.71-.7l-15-15zM14 14.7l-.99-.09v-.9l1 1zm-1.99-2v1.85a38.84 38.84 0 00-4 0V12a1 1 0 011-1h1.3l1.7 1.7zm-8 2.26V13a1 1 0 011-1h2v2.61c-1 .08-2 .2-3 .35zM5.5 11a1 1 0 110-2 1 1 0 010 2zm8.62 1L6.46 4.34c3.19.3 6.4.2 9.57-.32A1.7 1.7 0 0118 5.7v8.6c0 .44-.17.84-.44 1.14L16 13.88V13a1 1 0 00-1-1h-.88zm.38-1a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Video360Off20Filled;