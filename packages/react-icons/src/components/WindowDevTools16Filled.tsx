import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowDevTools16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2A2.75 2.75 0 002 4.75v6a2.75 2.75 0 002.75 2.75h4.03c-.05-.38.02-.77.22-1.13l.22-.37H4.75c-.69 0-1.25-.56-1.25-1.25V5H12v1.2c.47-.2.99-.26 1.5-.18V4.75A2.75 2.75 0 0010.75 2h-6z" fill={primaryFill} /><path d="M10.27 9.69a2.9 2.9 0 01.23-2.15l-1.4-1.4a.5.5 0 10-.7.71l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.17-1.16z" fill={primaryFill} /><path d="M7.1 6.15c.2.2.2.5 0 .7L5.46 8.5l1.64 1.65a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0z" fill={primaryFill} /><path d="M13.42 7.02l-.9 1.56a.64.64 0 101.1.64l.9-1.56a1.91 1.91 0 01-1.62 3.14l-1.65 2.87a.8.8 0 11-1.38-.8l1.65-2.86a1.91 1.91 0 011.9-2.99z" fill={primaryFill} /></svg>;
};

export default WindowDevTools16Filled;