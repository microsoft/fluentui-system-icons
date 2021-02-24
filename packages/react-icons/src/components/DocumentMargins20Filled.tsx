import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentMargins20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2v-3.5a.5.5 0 011 0V18h6v-3.5a.5.5 0 011 0V18a2 2 0 002-2V4a2 2 0 00-2-2v3.5a.5.5 0 01-1 0V2H7v3.5a.5.5 0 01-1 0V2zm.5 11a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zm7 0a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5z" fill={primaryFill} /></svg>;
};

export default DocumentMargins20Filled;