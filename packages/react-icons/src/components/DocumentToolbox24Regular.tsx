import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentToolbox24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.25c0-.41.34-.75.75-.75H12V8c0 1.1.9 2 2 2h4.5v9.75c0 .41-.34.75-.75.75H13V22h4.75c1.24 0 2.25-1 2.25-2.25V9.66c0-.46-.18-.9-.51-1.23L13.57 2.5A1.75 1.75 0 0012.34 2H6.25C5.01 2 4 3 4 4.25v8.02A2 2 0 015 12h.5V4.25zM17.44 8.5H14a.5.5 0 01-.5-.5V4.56l3.94 3.94z" fill={primaryFill} /><path d="M4 16v-1.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V16h1.5c.83 0 1.5.67 1.5 1.5V19H9v-.5a.5.5 0 00-1 0v.5H5v-.5a.5.5 0 00-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4zm1-1.5V16h3v-1.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5z" fill={primaryFill} /><path d="M9 20h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 011 21.5V20h3v.5a.5.5 0 001 0V20h3v.5a.5.5 0 001 0V20z" fill={primaryFill} /></svg>;
};

export default DocumentToolbox24Regular;