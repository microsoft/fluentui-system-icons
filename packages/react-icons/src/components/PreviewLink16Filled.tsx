import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PreviewLink16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5v1h8V5H4z" fill={primaryFill} /><path d="M10 9v2h2V9h-2z" fill={primaryFill} /><path d="M1 4.75A2.75 2.75 0 013.75 2h8.5A2.75 2.75 0 0115 4.75v6.5A2.75 2.75 0 0112.25 14h-8.5A2.75 2.75 0 011 11.25v-6.5zm2-.25v2c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5zm6 4v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5zm-5.5 0a.5.5 0 000 1h4a.5.5 0 000-1h-4zM3 11c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
};

export default PreviewLink16Filled;