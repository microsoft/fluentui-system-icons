import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowDevTools16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v6A2.5 2.5 0 004.5 13h4.28c.03-.21.1-.43.22-.63l.22-.37H4.5A1.5 1.5 0 013 10.5V5h9v1.2c.32-.13.66-.2 1-.21V4.5A2.5 2.5 0 0010.5 2h-6zM3.08 4c.21-.58.77-1 1.42-1h6c.65 0 1.2.42 1.41 1H3.08z" fill={primaryFill} /><path d="M10.42 7.7L8.85 6.16a.5.5 0 00-.7.7L9.79 8.5l-1.64 1.65a.5.5 0 10.7.7l1.37-1.36a2.9 2.9 0 01.2-1.78z" fill={primaryFill} /><path d="M6.85 6.15c.2.2.2.5 0 .7L5.21 8.5l1.64 1.65a.5.5 0 11-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0z" fill={primaryFill} /><path d="M12.52 8.58l.9-1.56a1.91 1.91 0 00-1.9 3l-1.65 2.85a.8.8 0 001.38.8l1.65-2.87a1.91 1.91 0 001.62-3.14l-.9 1.56a.64.64 0 11-1.1-.64z" fill={primaryFill} /></svg>;
};

export default WindowDevTools16Regular;