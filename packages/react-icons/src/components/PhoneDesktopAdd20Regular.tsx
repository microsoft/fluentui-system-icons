import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneDesktopAdd20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5z" fill={primaryFill} /><path d="M17 11v-.6c.36-.18.7-.4 1-.66V11a2 2 0 01-2 2h-3v2h1.5a.5.5 0 010 1H9v-1h3v-2H9v-1h7a1 1 0 001-1z" fill={primaryFill} /><path d="M10.26 2c-.26.3-.48.64-.66 1H6a1 1 0 00-1 1v3H4V4c0-1.1.9-2 2-2h4.26z" fill={primaryFill} /><path d="M4 15.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2 9.5C2 8.67 2.67 8 3.5 8h3C7.33 8 8 8.67 8 9.5v7c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 012 16.5v-7zM3.5 9a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-3z" fill={primaryFill} /></svg>;
};

export default PhoneDesktopAdd20Regular;