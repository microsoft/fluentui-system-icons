import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Headset24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 9a7 7 0 0114 0v5a2 2 0 01-2 2h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2.5V9a5.5 5.5 0 10-11 0v1H9a1 1 0 011 1v4a1 1 0 01-1 1H7a2 2 0 01-.5-.06v.31c0 1.2.93 2.17 2.1 2.24l.15.01h1.13a2.25 2.25 0 110 1.5H8.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V9z" fill={primaryFill} /></svg>;
};

export default Headset24Filled;