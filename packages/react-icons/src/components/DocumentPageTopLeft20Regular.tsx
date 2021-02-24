import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPageTopLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.07 9.44a.5.5 0 001 .15L8.14 9h1.24l-.07.44a.5.5 0 001 .15L10.4 9h.6a.5.5 0 000-1h-.46l.22-1.5h.74a.5.5 0 000-1h-.59l.14-.93a.5.5 0 00-1-.14L9.9 5.5H8.66l.14-.93a.5.5 0 00-1-.14L7.66 5.5H7a.5.5 0 000 1h.5L7.28 8H6.5a.5.5 0 000 1h.64l-.07.44zM9.75 6.5L9.53 8H8.3l.22-1.5h1.24z" fill={primaryFill} /><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default DocumentPageTopLeft20Regular;