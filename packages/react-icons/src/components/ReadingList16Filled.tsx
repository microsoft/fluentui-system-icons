import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingList16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4.39a.61.61 0 011.13-.34.75.75 0 001.24-.84A2.11 2.11 0 104 6.5h7.31a.75.75 0 000-1.5h-7.2a.61.61 0 01-.61-.61z" fill={primaryFill} /><path d="M7.75 2.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" fill={primaryFill} /><path d="M4.75 7.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /><path d="M2 10.75c0-.41.34-.75.75-.75h8.5a.75.75 0 110 1.5h-8.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M4.75 12.5a.75.75 0 100 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /></svg>;
};

export default ReadingList16Filled;