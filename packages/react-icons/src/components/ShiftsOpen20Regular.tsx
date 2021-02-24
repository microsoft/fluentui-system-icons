import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShiftsOpen20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5C4 4.67 4.67 4 5.5 4h2a.5.5 0 000-1h-2A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h2a.5.5 0 000-1h-2A1.5 1.5 0 014 14.5v-9z" fill={primaryFill} /><path d="M12.5 3a.5.5 0 000 1h2c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 000 1h2a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-2z" fill={primaryFill} /><path d="M10 5.5a.5.5 0 00-1 0v5c0 .28.22.5.5.5h4a.5.5 0 000-1H10V5.5z" fill={primaryFill} /></svg>;
};

export default ShiftsOpen20Regular;