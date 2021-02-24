import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabDesktopArrowClockwise20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-3.76c.26-.3.48-.64.66-1h3.1c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 018 5.5V4H5.5C4.67 4 4 4.67 4 5.5v3.1c-.36.18-.7.4-1 .66V5.5zM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16z" fill={primaryFill} /><path d="M9.5 8.5c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.8a3.5 3.5 0 101.7 3 .5.5 0 011 0 4.5 4.5 0 11-2-3.74V9c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default TabDesktopArrowClockwise20Regular;