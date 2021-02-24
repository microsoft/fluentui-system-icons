import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardSearch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v3.85a5.5 5.5 0 017.25 7.67l2.24 2.24c.53.54.65 1.34.34 1.99h3.92c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 00-2.24-2zm-3.5 1.5h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zm-.3 14.39a4.5 4.5 0 10-1.15.98l2.92 2.91a.75.75 0 101.06-1.06l-2.83-2.83zM6.5 18a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
};

export default ClipboardSearch24Filled;