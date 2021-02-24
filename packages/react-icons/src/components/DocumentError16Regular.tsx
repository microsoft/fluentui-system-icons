import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentError16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v2.2c.32-.08.66-.15 1-.18V3a1 1 0 011-1h3v2.5c0 .83.67 1.5 1.5 1.5H13v7a1 1 0 01-1 1H9.74c-.3.38-.67.71-1.07 1H12a2 2 0 002-2V5.42c0-.4-.16-.78-.44-1.06l-2.92-2.92A1.5 1.5 0 009.58 1H6zm4 3.5V2.21l2.8 2.8h-2.3a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M10 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM5.5 8a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z" fill={primaryFill} /></svg>;
};

export default DocumentError16Regular;