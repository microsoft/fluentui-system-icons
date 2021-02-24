import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesignIdeas16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3.5c-.56 0-1.08.15-1.53.42a3.4 3.4 0 00-.48-1.45A4.5 4.5 0 0111.97 6h1.28c.97 0 1.75.78 1.75 1.75v4.5c0 .97-.78 1.75-1.75 1.75h-4.5C7.78 14 7 13.22 7 12.25v-1.28c-.35-.04-.7-.12-1.02-.23L6 10v-.08l-.01-.83c.3.18.65.3 1.01.37V7.75C7 6.78 7.78 6 8.75 6h1.7A3 3 0 007.5 3.5zm4.39 4a4.5 4.5 0 01-3.39 3.39v1.36c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-4.5a.25.25 0 00-.25-.25h-1.36zm-1.56 0H8.75a.25.25 0 00-.25.25v1.58a3 3 0 001.83-1.83z" fill={primaryFill} /><path d="M3.58 1.13a.5.5 0 01.12.6l-.01.08c0 .07.01.19.16.34l.2.18.16.16c.13.12.27.27.4.45.25.38.39.86.39 1.56 0 .83-.3 1.54-.77 2 .29.29.46.68.56 1.06.21.76.21 1.68.21 2.4V10c0 2.06-.39 3.28-.82 4-.22.37-.45.6-.64.75a1.65 1.65 0 01-.33.2S3.08 15 3 15a.8.8 0 01-.3-.09 1.64 1.64 0 01-.24-.16 2.67 2.67 0 01-.64-.74C1.4 13.28 1 12.06 1 10v-.04c0-.72 0-1.64.2-2.4.11-.38.28-.77.57-1.07A2.73 2.73 0 011 4.5a4.73 4.73 0 01.69-2.1A4.07 4.07 0 012.93 1.1l.03-.02h.01a.5.5 0 01.61.04z" fill={primaryFill} /></svg>;
};

export default DesignIdeas16Filled;