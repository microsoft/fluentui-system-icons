import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCommunity16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /><path d="M9.78 4.58A2 2 0 0011 5a2 2 0 10-1.22-.42z" fill={primaryFill} /><path d="M6.27 6a2 2 0 113.46 2 2 2 0 01-3.46-2z" fill={primaryFill} /><path d="M2.5 6h2.67a3 3 0 00.6 3H5.5c-1.09 0-2 .7-2.35 1.66a3.73 3.73 0 01-.94-.55A3.25 3.25 0 011 7.5C1 6.67 1.67 6 2.5 6z" fill={primaryFill} /><path d="M10.5 9c1.09 0 2 .7 2.35 1.66.34-.14.66-.32.94-.55.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-2.67a3 3 0 01-.6 3h.27z" fill={primaryFill} /><path d="M11.89 10.93c.07.17.11.37.11.57 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.25 3.25 0 014 11.5 1.5 1.5 0 015.5 10h5c.63 0 1.16.38 1.39.93z" fill={primaryFill} /></svg>;
};

export default PeopleCommunity16Filled;