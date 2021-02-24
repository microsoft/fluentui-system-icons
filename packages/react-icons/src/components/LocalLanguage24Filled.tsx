import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocalLanguage24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.56 7.5l.06.12 5.3 13a1 1 0 01-1.8.87l-.05-.1-1.38-3.4H5.41l-1.5 3.42a1 1 0 01-1.2.55l-.11-.04a1 1 0 01-.56-1.2l.04-.12 5.7-13a1 1 0 011.78-.1zM19 2a1 1 0 011 .88V7h1a1 1 0 011 .88V8a1 1 0 01-.88 1H20v7a1 1 0 01-.88 1H19a1 1 0 01-1-.88V3a1 1 0 011-1zM8.66 10.57L6.28 16h4.6l-2.22-5.43zM11 2h5a1 1 0 011 .88V5.97a4 4 0 01-4 4 1 1 0 110-2 2 2 0 002-1.85V4h-4a1 1 0 01-.12-2H16h-5z" fill={primaryFill} /></svg>;
};

export default LocalLanguage24Filled;