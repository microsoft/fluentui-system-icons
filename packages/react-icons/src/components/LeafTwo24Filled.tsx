import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LeafTwo24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.7 2C2.78 2 2 2.76 2 3.7V8a6 6 0 005 5.92 7.96 7.96 0 011.4-4.45L6.23 7.28a.75.75 0 011.06-1.06l2.1 2.1A7.98 7.98 0 0113.7 6.1 6 6 0 008 2H3.7z" fill={primaryFill} /><path d="M9.55 18.39l-2.33 2.33a.75.75 0 101.06 1.06l2.33-2.33A7 7 0 0022 14V8.75C22 7.78 21.22 7 20.25 7H15a7 7 0 00-5.45 11.39zm6.23-4.1l-4.1 4.09c-.4-.3-.75-.66-1.06-1.06l4.1-4.1a.75.75 0 011.06 1.06z" fill={primaryFill} /></svg>;
};

export default LeafTwo24Filled;