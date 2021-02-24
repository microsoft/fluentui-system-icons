import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Crop24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 15.5c0 .78.6 1.42 1.36 1.5H21a1 1 0 01.12 2H19v2a1 1 0 01-2 .12V19H8.5A3.5 3.5 0 015 15.7V7H3a1 1 0 01-.12-2H5V3a1 1 0 012-.12V15.5zM8 5h7.5A3.5 3.5 0 0119 8.3V16h-2V8.5c0-.78-.6-1.42-1.36-1.5H8V5z" fill={primaryFill} /></svg>;
};

export default Crop24Filled;