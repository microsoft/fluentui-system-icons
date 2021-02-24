import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleTruck20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 12a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M8 13.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4 2a2 2 0 00-2 2v10.5c0 .83.67 1.5 1.5 1.5H4v.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V16h4v.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V16h.5c.83 0 1.5-.67 1.5-1.5V4a2 2 0 00-2-2H4zm9 14.5V16h2v.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5zM7 16v.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V16h2zM3 4a1 1 0 011-1h12a1 1 0 011 1v10.5a.5.5 0 01-.5.5H16V9.75c0-.2-.03-.41-.07-.61l-.76-3A1.5 1.5 0 0013.72 5H6.28a1.5 1.5 0 00-1.45 1.14l-.76 3c-.04.2-.07.4-.07.6V15h-.5a.5.5 0 01-.5-.5V4zm2 11v-5h10v5H5zm.14-6l.66-2.62A.5.5 0 016.28 6h7.44a.5.5 0 01.48.38L14.86 9H5.14z" fill={primaryFill} /></svg>;
};

export default VehicleTruck20Regular;