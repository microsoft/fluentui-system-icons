import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PositionToBack20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 14c0-1.1.9-2 2-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3zm2-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3z" fill={primaryFill} /><path d="M5 9h1.3C7.8 9 9 7.8 9 6.3V5h3.5A2.5 2.5 0 0115 7.5V11h-1.3a2.7 2.7 0 00-2.7 2.7V15H7.5A2.5 2.5 0 015 12.5V9z" fill={primaryFill} /><path d="M1 3c0-1.1.9-2 2-2h3a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1H3z" fill={primaryFill} /></svg>;
};

export default PositionToBack20Filled;