import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PlugDisconnected28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.74 6.33a5.5 5.5 0 01-.5 7.2l-1.94 1.95c-.3.3-.77.3-1.06 0l-6.72-6.71a.75.75 0 010-1.06l1.95-1.95a5.5 5.5 0 017.2-.5l3.05-3.04a.75.75 0 011.06 1.06l-3.04 3.05z" fill={primaryFill} /><path d="M12.78 12.28a.75.75 0 00-1.06-1.06l-2.13 2.12-.82-.82a.75.75 0 00-1.06 0l-1.95 1.94a5.5 5.5 0 00-.5 7.22l-3.04 3.04a.75.75 0 101.06 1.06l3.05-3.04a5.5 5.5 0 007.21-.5l1.95-1.94c.29-.3.29-.77 0-1.06l-.83-.83 2.12-2.13a.75.75 0 10-1.06-1.06l-2.12 2.13-2.95-2.95 2.13-2.12z" fill={primaryFill} /></svg>;
};

export default PlugDisconnected28Filled;