import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneSpanOut16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v2.09A1.5 1.5 0 014.91 7h.59a1.5 1.5 0 110 3h-.59A1.5 1.5 0 014 11.91V13c0 1.1.9 2 2 2h4a2 2 0 002-2v-1.09a1.5 1.5 0 01-.91-1.91h-.59a1.5 1.5 0 110-3h.59A1.5 1.5 0 0112 5.09V3a2 2 0 00-2-2H6z" fill={primaryFill} /><path d="M10.5 8h2.8l-1.15-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35l-2 2a.5.5 0 01-.71-.7L13.29 9H10.5a.5.5 0 01-.5-.5.5.5 0 01.5-.5z" fill={primaryFill} /><path d="M5.5 9a.5.5 0 000-1H2.7l1.15-1.15a.5.5 0 10-.7-.7l-2 2A.5.5 0 001 8.5a.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L2.71 9H5.5z" fill={primaryFill} /></svg>;
};

export default PhoneSpanOut16Filled;