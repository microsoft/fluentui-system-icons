import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Rename16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2a.5.5 0 000 1h1v10h-1a.5.5 0 000 1h3a.5.5 0 000-1h-1V3h1a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M4 4h2.5v8H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" fill={primaryFill} /><path d="M12 12H9.5V4H12a2 2 0 012 2v4a2 2 0 01-2 2z" fill={primaryFill} /></svg>;
};

export default Rename16Filled;