import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextContinuous24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M8 10a1 1 0 011-1h11a1 1 0 110 2H9a1 1 0 01-1-1z" fill={primaryFill} /><path d="M8 14a1 1 0 011-1h11a1 1 0 110 2H9a1 1 0 01-1-1z" fill={primaryFill} /><path d="M20 19H4a1 1 0 110-2h16a1 1 0 110 2z" fill={primaryFill} /><path d="M3.3 11.2a1 1 0 011.4-1.4l1.5 1.5a1 1 0 010 1.4l-1.5 1.5a1 1 0 01-1.4-1.4l.79-.8-.8-.8z" fill={primaryFill} /></svg>;
};

export default TextContinuous24Filled;