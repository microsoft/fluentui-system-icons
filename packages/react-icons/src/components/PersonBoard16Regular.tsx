import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonBoard16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-1a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M4 8.25C4 7.56 4.56 7 5.25 7h3.5C9.44 7 10 7.56 10 8.25v.25c0 .44-.19.96-.69 1.36-.49.4-1.24.64-2.31.64-1.08 0-1.83-.25-2.32-.65-.5-.4-.68-.92-.68-1.35v-.25zM5.25 8a.25.25 0 00-.25.25v.25c0 .14.06.37.31.58.26.2.76.42 1.69.42.93 0 1.43-.21 1.69-.42.25-.2.31-.43.31-.58v-.25A.25.25 0 008.75 8h-3.5z" fill={primaryFill} /><path d="M4.5 2A2.5 2.5 0 002 4.5v5A2.5 2.5 0 004.5 12h5A2.5 2.5 0 0012 9.5v-5A2.5 2.5 0 009.5 2h-5zm5 1c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 013 9.5v-5C3 3.67 3.67 3 4.5 3h5z" fill={primaryFill} /><path d="M4.5 13c.46.6 1.18 1 2 1h3A4.5 4.5 0 0014 9.5v-3c0-.82-.4-1.54-1-2v5A3.5 3.5 0 019.5 13h-5z" fill={primaryFill} /></svg>;
};

export default PersonBoard16Regular;