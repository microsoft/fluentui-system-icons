import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideMicrophone24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v7.75a3.5 3.5 0 00-7 0v1.59a1.5 1.5 0 00-2 1.41c0 .92.28 1.77.75 2.5h-9A2.75 2.75 0 012 17.25V6.75zM6.75 8a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM6 14.75c0 .41.34.75.75.75h5.5a.75.75 0 000-1.5h-5.5a.75.75 0 00-.75.75z" fill={primaryFill} /><path d="M15 17.5c0 1.09.6 1.98 1.52 2.5a4 4 0 001.98.5c1.93 0 3.5-1.25 3.5-3a.5.5 0 011 0c0 2-1.75 3.72-4 3.97v1.03a.5.5 0 01-1 0v-1.03A4.77 4.77 0 0115.02 20 3.7 3.7 0 0114 17.5a.5.5 0 011 0z" fill={primaryFill} /><path d="M16 14.5a2.5 2.5 0 015 0V17a2.5 2.5 0 01-5 0v-2.5z" fill={primaryFill} /></svg>;
};

export default SlideMicrophone24Filled;