import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cloud48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 12c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H13.39a7.37 7.37 0 110-14.73h.16C14.07 16.16 17.66 12 24 12zm0 2.5a8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35H13.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.73h21.6a4.7 4.7 0 004.7-4.73 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.59-1.4-1.34A8 8 0 0024 14.5z" fill={primaryFill} /></svg>;
};

export default Cloud48Regular;