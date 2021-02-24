import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationLive20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.53 3.01L9 3a7 7 0 016.98 7.47.5.5 0 101 .07L17 10A8 8 0 008.46 2a.5.5 0 10.07 1z" fill={primaryFill} /><path d="M8 4.98a.5.5 0 01.52-.47 6.25 6.25 0 015.97 5.97.5.5 0 11-1 .04A5.25 5.25 0 008.49 5.5.5.5 0 018 4.98z" fill={primaryFill} /><path d="M6.04 16.4l1.1 1.1c.2.2.52.2.71 0L9 16.37l1.7-1.69a4.5 4.5 0 10-6.37 0l1.72 1.72zm1.46-3.78a1.13 1.13 0 110-2.25 1.13 1.13 0 010 2.25z" fill={primaryFill} /></svg>;
};

export default LocationLive20Filled;