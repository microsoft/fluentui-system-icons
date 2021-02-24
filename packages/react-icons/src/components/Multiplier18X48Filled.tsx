import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier18X48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31 19c0 1.48-.66 2.73-1.67 3.64A6.28 6.28 0 0132 27.75c0 3.72-3.27 6.5-7 6.5s-7-2.78-7-6.5a6.28 6.28 0 012.67-5.1A4.83 4.83 0 0119 19c0-3.14 2.95-5.25 6-5.25s6 2.1 6 5.25zm-6-2.25c-1.92 0-3 1.25-3 2.25s1.08 2.25 3 2.25S28 20 28 19s-1.08-2.25-3-2.25zm-4 11c0 1.8 1.65 3.5 4 3.5s4-1.7 4-3.5-1.65-3.5-4-3.5-4 1.7-4 3.5zm15.56-3.31a1.5 1.5 0 00-2.12 2.12L36.88 29l-2.44 2.44a1.5 1.5 0 002.12 2.12L39 31.12l2.44 2.44a1.5 1.5 0 002.12-2.12L41.12 29l2.44-2.44a1.5 1.5 0 00-2.12-2.12L39 26.88l-2.44-2.44zM16.5 32.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-5.6-18.7c.65.18 1.1.78 1.1 1.45v17a1.5 1.5 0 11-3 0V19.67a15.4 15.4 0 01-2.73 2.12 1.5 1.5 0 11-1.54-2.58c1.37-.82 2.5-1.94 3.3-2.88a15.94 15.94 0 001.17-1.59l.01-.01a1.5 1.5 0 011.7-.68z" fill={primaryFill} /></svg>;
};

export default Multiplier18X48Filled;