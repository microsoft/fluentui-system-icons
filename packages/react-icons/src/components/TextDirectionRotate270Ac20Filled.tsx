import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionRotate270Ac20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3.75a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8.5V2.5a.75.75 0 00-1.5 0v1.25H3.75z" fill={primaryFill} /><path d="M4 10.75a.75.75 0 001.5 0V7.5H6c.92 0 1.95.19 2.72.68.73.47 1.28 1.23 1.28 2.57a.75.75 0 001.5 0 4.3 4.3 0 00-1.97-3.83A6.66 6.66 0 006 6H4.75a.75.75 0 00-.75.75v4z" fill={primaryFill} /><path d="M15.78 4.22a.75.75 0 10-1.06 1.06l.72.72h-2.69a.75.75 0 000 1.5h2.69l-.72.72a.75.75 0 001.06 1.06l2-2a.75.75 0 000-1.06l-2-2z" fill={primaryFill} /><path d="M15.78 11.72a.75.75 0 10-1.06 1.06l.72.72H4.75a.75.75 0 000 1.5h10.69l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2z" fill={primaryFill} /></svg>;
};

export default TextDirectionRotate270Ac20Filled;