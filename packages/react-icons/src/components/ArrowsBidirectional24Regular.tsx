import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowsBidirectional24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 9H9V6.75c0-.66-.79-1-1.26-.54l-5.5 5.25a.75.75 0 000 1.08l5.5 5.25.08.07a.75.75 0 001.19-.61V15h6v2.25c0 .66.78 1 1.26.54l5.5-5.25c.3-.3.3-.79 0-1.08l-5.5-5.25a.75.75 0 00-1.27.54V9zM3.84 12L7.5 8.5v1.25c0 .41.34.75.76.75h7.6a.75.75 0 00.64-.75V8.5l3.66 3.5-3.66 3.5v-1.25a.75.75 0 00-.75-.75h-7.6a.75.75 0 00-.64.75v1.25L3.83 12z" fill={primaryFill} /></svg>;
};

export default ArrowsBidirectional24Regular;