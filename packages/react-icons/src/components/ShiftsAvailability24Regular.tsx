import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShiftsAvailability24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 3.5a5 5 0 00-.23 10c-.13.47-.22.97-.25 1.48a6.5 6.5 0 116.96-6.96c-.5.03-1 .12-1.49.25A5 5 0 008.5 3.5z" fill={primaryFill} /><path d="M14.28 13.23a.75.75 0 10-1.06 1.07l1.22 1.2-1.22 1.22a.75.75 0 101.06 1.06l1.22-1.22 1.21 1.22a.75.75 0 001.07-1.06l-1.22-1.22 1.21-1.2a.75.75 0 00-1.05-1.07l-1.22 1.21-1.22-1.2z" fill={primaryFill} /><path d="M15.5 9a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm-5 6.5a5 5 0 1110 0 5 5 0 01-10 0z" fill={primaryFill} /><path d="M11.28 6.72c.3.3.3.77 0 1.06l-3 3a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 011.06-1.06l.97.97 2.47-2.47c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
};

export default ShiftsAvailability24Regular;