import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PositionToFront20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3c0-1.1.9-2 2-2h3a2 2 0 012 2v1h-.5c-.17 0-.34.01-.5.04V3a1 1 0 00-1-1H3a1 1 0 00-1 1v3a1 1 0 001 1h1.04C4 7.16 4 7.33 4 7.5V8H3a2 2 0 01-2-2V3z" fill={primaryFill} /><path d="M12 16v1c0 1.1.9 2 2 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-1v.5c0 .17-.01.34-.04.5H17a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1.04c-.16.03-.33.04-.5.04H12z" fill={primaryFill} /><path d="M5 7.5A2.5 2.5 0 017.5 5h5A2.5 2.5 0 0115 7.5v5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 015 12.5v-5z" fill={primaryFill} /></svg>;
};

export default PositionToFront20Filled;