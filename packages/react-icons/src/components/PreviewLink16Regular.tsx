import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PreviewLink16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2zM4 5v1h8V5H4z" fill={primaryFill} /><path d="M9.5 8a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm.5 3V9h2v2h-2z" fill={primaryFill} /><path d="M3 9c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4A.5.5 0 013 9z" fill={primaryFill} /><path d="M3.5 10.5a.5.5 0 000 1h4a.5.5 0 100-1h-4z" fill={primaryFill} /><path d="M1 4.5A2.5 2.5 0 013.5 2h9A2.5 2.5 0 0115 4.5v7a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 11.5v-7zM3.5 3C2.67 3 2 3.67 2 4.5v7c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /></svg>;
};

export default PreviewLink16Regular;