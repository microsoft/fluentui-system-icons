import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DialpadOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.5 4.5a1.5 1.5 0 101.76 1.76l3.24 3.24a1.5 1.5 0 101.75 1.75l7.25 7.25a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M18.5 14.25c0 .3-.1.58-.25.82l-2.07-2.08a1.5 1.5 0 012.32 1.26z" fill={primaryFill} /><path d="M13.5 9.25c0 .3-.09.59-.25.82L11.18 8a1.5 1.5 0 012.32 1.25z" fill={primaryFill} /><path d="M8.5 4.25c0 .3-.09.59-.24.83L6.18 3A1.5 1.5 0 018.5 4.25z" fill={primaryFill} /><path d="M12 17.75a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /><path d="M7 12.75a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /><path d="M17 7.75a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /><path d="M12 2.75a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /><path d="M17 2.75a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
};

export default DialpadOff24Filled;