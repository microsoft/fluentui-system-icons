import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentEndnote20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H11v-6a2 2 0 00-2-2H4V3.5C4 2.67 4.67 2 5.5 2H10z" fill={primaryFill} /><path d="M11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25z" fill={primaryFill} /><path d="M3.5 11a.5.5 0 010 1h-1a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h1a.5.5 0 010 1h-1A1.5 1.5 0 011 17.5v-5c0-.83.67-1.5 1.5-1.5h1z" fill={primaryFill} /><path d="M7.5 18a.5.5 0 000 1h1c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 000 1h1c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-1z" fill={primaryFill} /><path d="M6 14.5a.5.5 0 00-1 0v3a.5.5 0 101 0v-3z" fill={primaryFill} /><path d="M6 12.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /></svg>;
};

export default DocumentEndnote20Filled;