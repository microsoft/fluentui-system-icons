import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextHanging24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5a1 1 0 000 2h18a1 1 0 100-2H3z" fill={primaryFill} /><path d="M10 17a1 1 0 100 2h11a1 1 0 100-2H10z" fill={primaryFill} /><path d="M9 12a1 1 0 011-1h11a1 1 0 110 2H10a1 1 0 01-1-1z" fill={primaryFill} /><path d="M4.7 13.3a1 1 0 00-1.4 1.4L4.58 16l-1.3 1.3a1 1 0 101.42 1.4l2-2a1 1 0 000-1.4l-2-2z" fill={primaryFill} /></svg>;
};

export default TextHanging24Filled;