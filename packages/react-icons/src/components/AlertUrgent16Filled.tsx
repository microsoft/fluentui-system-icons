import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlertUrgent16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.04 1.3a.5.5 0 01.66-.26A7.8 7.8 0 0115 8.48v.03a.5.5 0 01-1-.01v-.05c.02-.34.1-2.16-.93-3.86a7.21 7.21 0 00-2.77-2.63.5.5 0 01-.26-.66z" fill={primaryFill} /><path d="M10.1 3.71a.5.5 0 01.7-.11c-.01 0 .23.15.51.4a4.51 4.51 0 011.46 3.19v.06a.5.5 0 01-1 0 3.48 3.48 0 00-1.56-2.84.5.5 0 01-.12-.7z" fill={primaryFill} /><path d="M2.54 10.7a4 4 0 016.92-4l.82 1.43L12.2 9.5a.5.5 0 01-.04.84l-2.53 1.46-2.74 1.58-2.53 1.46a.5.5 0 01-.75-.38l-.24-2.34-.82-1.42z" fill={primaryFill} /><path d="M10.25 12.6l-3 1.74a1.75 1.75 0 003-1.73z" fill={primaryFill} /></svg>;
};

export default AlertUrgent16Filled;