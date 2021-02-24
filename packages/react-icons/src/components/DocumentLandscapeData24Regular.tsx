import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentLandscapeData24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9a2 2 0 114 0v6a2 2 0 11-4 0V9zm2-.5a.5.5 0 00-.5.5v6a.5.5 0 001 0V9a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M5 14a2 2 0 114 0v1a2 2 0 11-4 0v-1zm2.5 0a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z" fill={primaryFill} /><path d="M17 10a2 2 0 00-2 2v3a2 2 0 104 0v-3a2 2 0 00-2-2zm.5 2v3a.5.5 0 01-1 0v-3a.5.5 0 011 0z" fill={primaryFill} /><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zM4.75 5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H4.75z" fill={primaryFill} /></svg>;
};

export default DocumentLandscapeData24Regular;