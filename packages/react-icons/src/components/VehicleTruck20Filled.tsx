import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleTruck20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v11a1 1 0 001 1V9.8c0-.25.04-.5.1-.72L4.16 5.6A2.25 2.25 0 016.3 4h7.4c1 0 1.87.65 2.15 1.6l1.04 3.48c.07.23.11.47.11.71V16a1 1 0 001-1V4a2 2 0 00-2-2H4z" fill={primaryFill} /><path d="M16 9.8v6.7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V16H8v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 014 16.5V9.8c0-.15.02-.3.06-.44L5.1 5.9c.16-.53.65-.89 1.2-.89h7.4c.55 0 1.04.36 1.2.9l1.04 3.46c.04.14.06.29.06.43zM5 16.5c0 .28.22.5.5.5h1a.5.5 0 00.5-.5V16H5v.5zM14.86 9l-.66-2.62a.5.5 0 00-.48-.38H6.28a.5.5 0 00-.48.38L5.14 9h9.72zM13 16.5c0 .28.22.5.5.5h1a.5.5 0 00.5-.5V16h-2v.5zM7 13a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 10-2 0 1 1 0 002 0zm-5.5 1a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /></svg>;
};

export default VehicleTruck20Filled;