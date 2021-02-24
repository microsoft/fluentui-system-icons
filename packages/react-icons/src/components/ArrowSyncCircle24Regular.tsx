import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSyncCircle24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 8.25a.75.75 0 00-1.5 0v3.25c0 .41.34.75.75.75H10a.75.75 0 000-1.5H8.73a3.5 3.5 0 015.94-1.02.75.75 0 101.16-.96A5 5 0 008 9v-.75z" fill={primaryFill} /><path d="M16 15v.75a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75H14a.75.75 0 000 1.5h1.16a3.5 3.5 0 01-5.84.77.75.75 0 10-1.14.97A5.01 5.01 0 0016 15z" fill={primaryFill} /><path d="M12 2a10 10 0 110 20 10 10 0 010-20zM3.5 12a8.5 8.5 0 1017 0 8.5 8.5 0 00-17 0z" fill={primaryFill} /></svg>;
};

export default ArrowSyncCircle24Regular;