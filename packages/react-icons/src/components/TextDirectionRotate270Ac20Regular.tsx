import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionRotate270Ac20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4a.5.5 0 000 1h8a.5.5 0 000-1H8V2.5a.5.5 0 00-1 0V4H3.5z" fill={primaryFill} /><path d="M4 10.5a.5.5 0 001 0V7h.75c.95 0 2.03.2 2.86.72.8.51 1.39 1.35 1.39 2.78a.5.5 0 001 0c0-1.77-.78-2.93-1.86-3.62A6.42 6.42 0 005.75 6H4.5a.5.5 0 00-.5.5v4z" fill={primaryFill} /><path d="M14.85 4.15a.5.5 0 00-.7.7L15.29 6H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2z" fill={primaryFill} /><path d="M14.85 12.15a.5.5 0 00-.7.7L15.29 14H3.5a.5.5 0 000 1h11.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2z" fill={primaryFill} /></svg>;
};

export default TextDirectionRotate270Ac20Regular;