import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallForward20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.29 2.2l-.85-.16a2.53 2.53 0 00-2.32.81C4.7 4.42 4 6.87 4 10.2c0 3.32.72 5.7 2.13 7.12.6.6 1.5.83 2.34.58l.84-.25c.8-.23 1.33-1 1.24-1.82l-.17-1.63a1.53 1.53 0 00-1.26-1.36l-1.8-.32a6.36 6.36 0 01-.16-4.98l1.93-.5c.7-.19 1.21-.8 1.28-1.5l.17-1.65a1.54 1.54 0 00-1.25-1.7z" fill={primaryFill} /><path d="M14.35 5.65a.5.5 0 00-.7.7L16.29 9H10.5a.5.5 0 000 1h5.8l-2.65 2.65a.5.5 0 00.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5z" fill={primaryFill} /></svg>;
};

export default CallForward20Filled;