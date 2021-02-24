import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookPulse24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm7.7 2.96a.75.75 0 00-1.37-.05L8.79 10.5H7.75a.75.75 0 000 1.5h1.5c.28 0 .54-.16.67-.41l1.02-2.05 2.12 5a.75.75 0 001.34.09L15.93 12h.82a.75.75 0 000-1.5H15.5a.75.75 0 00-.65.37l-1 1.7-2.16-5.11z" fill={primaryFill} /></svg>;
};

export default BookPulse24Filled;