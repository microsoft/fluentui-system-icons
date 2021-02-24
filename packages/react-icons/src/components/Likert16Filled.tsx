import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Likert16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 13V8.5H1v2A2.5 2.5 0 003.5 13H4z" fill={primaryFill} /><path d="M5 13h7.5a2.5 2.5 0 002.5-2.5v-2H5V13zm2.5-2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M15 7.5v-2A2.5 2.5 0 0012.5 3H5v4.5h10zM6.75 6a.75.75 0 110-1.5.75.75 0 010 1.5zm2 0a.75.75 0 110-1.5.75.75 0 010 1.5zm2 0a.75.75 0 110-1.5.75.75 0 010 1.5zm2 0a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /><path d="M4 3h-.5A2.5 2.5 0 001 5.5v2h3V3z" fill={primaryFill} /></svg>;
};

export default Likert16Filled;