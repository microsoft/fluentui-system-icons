import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GridKanban20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1H3z" fill={primaryFill} /><path d="M3 8a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V9a1 1 0 00-1-1H3z" fill={primaryFill} /><path d="M3 14a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1v-2a1 1 0 00-1-1H3z" fill={primaryFill} /><path d="M12 2a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1h-5z" fill={primaryFill} /><path d="M12 8a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V9a1 1 0 00-1-1h-5z" fill={primaryFill} /></svg>;
};

export default GridKanban20Filled;