import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HatGraduation24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.9 3.7a3.87 3.87 0 014.2 0l8.05 5.17a.75.75 0 01.01 1.26L19 12.19v5.56c0 .16-.05.32-.15.45l-.01.02-.02.02v.01a3.38 3.38 0 01-.41.43c-.28.27-.7.61-1.25.96A9.7 9.7 0 0112 21a9.7 9.7 0 01-5.16-1.36 7.43 7.43 0 01-1.69-1.44.75.75 0 01-.15-.45v-5.56l-2-1.3v5.36a.75.75 0 01-1.5 0V9.5c0-.27.14-.5.36-.64L9.9 3.7zm4.22 11.68a3.87 3.87 0 01-4.24 0l-3.38-2.2v4.29l.13.13c.21.2.54.48 1 .76A8.2 8.2 0 0012 19.5a8.2 8.2 0 004.37-1.14 5.94 5.94 0 001.13-.9v-4.29l-3.38 2.21zm-.84-10.42c-.78-.5-1.78-.5-2.56 0L3.63 9.51l7.07 4.62c.79.51 1.81.51 2.6 0l7.07-4.62-7.09-4.55z" fill={primaryFill} /></svg>;
};

export default HatGraduation24Regular;