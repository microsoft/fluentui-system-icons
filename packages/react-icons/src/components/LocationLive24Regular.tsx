import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationLive24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.8 2.03a.75.75 0 00-.1 1.5 10.5 10.5 0 019.78 9.77.75.75 0 101.5-.1A12 12 0 009.8 2.03z" fill={primaryFill} /><path d="M8.5 15.62a1.13 1.13 0 100-2.25 1.13 1.13 0 000 2.25z" fill={primaryFill} /><path d="M7.98 21.77l-.4-.38a4307.72 4307.72 0 01-2.96-2.96 5.5 5.5 0 117.77 0l-2.01 2-1.35 1.34c-.29.3-.76.3-1.05 0zm-2.3-10.05a4 4 0 000 5.65l2.04 2.03.78.78.82-.8 2.01-2a4 4 0 10-5.65-5.66z" fill={primaryFill} /><path d="M9.82 5.5A.75.75 0 009.68 7 6.99 6.99 0 0116 13.3a.75.75 0 101.5-.13A8.49 8.49 0 009.82 5.5z" fill={primaryFill} /></svg>;
};

export default LocationLive24Regular;