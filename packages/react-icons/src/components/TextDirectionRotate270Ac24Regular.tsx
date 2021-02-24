import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionRotate270Ac24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5a.75.75 0 000 1.5h9A.75.75 0 0012 5H7.5V3.75a.75.75 0 00-1.5 0V5H3z" fill={primaryFill} /><path d="M3 12.75a.75.75 0 001.5 0V9.5H5c.92 0 1.95.19 2.72.68.73.47 1.28 1.23 1.28 2.57a.75.75 0 001.5 0 4.3 4.3 0 00-1.97-3.83A6.66 6.66 0 005 8H3.75a.75.75 0 00-.75.75v4z" fill={primaryFill} /><path d="M18.78 6.22a.75.75 0 10-1.06 1.06l.72.72h-5.69a.75.75 0 000 1.5h5.69l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2z" fill={primaryFill} /><path d="M18.78 14.22a.75.75 0 10-1.06 1.06l.72.72H3.75a.75.75 0 000 1.5h14.69l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2z" fill={primaryFill} /></svg>;
};

export default TextDirectionRotate270Ac24Regular;