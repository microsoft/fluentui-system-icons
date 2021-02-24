import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MusicNote124Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.51 2.05a.75.75 0 00-1.01.7v12.13a4 4 0 101.5 3.37V8.83l6.99 2.62a.75.75 0 001.01-.7V7.48c0-1.35-.84-2.56-2.1-3.04l-6.39-2.4z" fill={primaryFill} /></svg>;
};

export default MusicNote124Filled;