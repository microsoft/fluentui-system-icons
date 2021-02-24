import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationLive24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.73a.75.75 0 01.8-.7A12 12 0 0120.97 13.2a.75.75 0 01-1.5.1A10.5 10.5 0 009.7 3.52a.75.75 0 01-.7-.8z" fill={primaryFill} /><path d="M7.59 21.39l.39.38c.29.3.76.3 1.05 0l1.35-1.33 2.01-2a5.5 5.5 0 10-7.77 0 1162.27 1162.27 0 002.97 2.95zm.91-5.64a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" fill={primaryFill} /><path d="M9.82 5.5A.75.75 0 109.68 7 6.99 6.99 0 0116 13.3a.75.75 0 101.5-.13A8.49 8.49 0 009.82 5.5z" fill={primaryFill} /></svg>;
};

export default LocationLive24Filled;