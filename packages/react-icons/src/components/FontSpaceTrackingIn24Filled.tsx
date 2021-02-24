import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontSpaceTrackingIn24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.61 16.21l.1.08 2 2a1 1 0 01.08 1.32l-.08.1-2 2a1 1 0 01-1.5-1.32l.08-.1.3-.3L4 20a1 1 0 01-.12-2h3.7l-.29-.3a1 1 0 01-.08-1.31l.08-.1a1 1 0 011.32-.08zm6.78 0a1 1 0 011.22 0l.1.08.08.1a1 1 0 010 1.22l-.08.1-.3.29H20a1 1 0 01.12 2H16.4l.3.3.08.09a1 1 0 01-1.4 1.4l-.1-.08-2-2-.08-.1a1 1 0 010-1.22l.08-.1 2-2 .1-.08zM9.12 2.45l.06.1.06.12 4.3 11a1 1 0 01-1.81.83l-.05-.1-1.11-2.85H6.04l-1.1 2.84a1 1 0 01-1.2.6l-.1-.03a1 1 0 01-.6-1.18l.03-.11 4.3-11a1 1 0 011.75-.22zm10.02.08a1 1 0 011.85.72l-.04.11-4.3 11-.05.12a1 1 0 01-1.76 0l-.05-.12-4.3-11-.04-.1a1 1 0 01.5-1.14l.1-.05.11-.04a1 1 0 011.14.5l.05.1 3.37 8.63 3.37-8.62.05-.11zM8.3 5.77L6.83 9.55h2.95L8.3 5.77z" fill={primaryFill} /></svg>;
};

export default FontSpaceTrackingIn24Filled;