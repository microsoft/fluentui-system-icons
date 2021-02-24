import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Settings28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.7 2.31c-.89-.2-1.79-.3-2.69-.31-.92.01-1.82.11-2.7.31a.92.92 0 00-.72.8l-.2 1.88A1.7 1.7 0 018 6.36L6.3 5.61a.92.92 0 00-1.04.21 12.06 12.06 0 00-2.7 4.67c-.12.37 0 .78.33 1.02l1.52 1.12a1.7 1.7 0 010 2.74L2.87 16.5a.92.92 0 00-.33 1.01 12.06 12.06 0 002.7 4.68c.27.28.7.37 1.05.21l1.73-.76a1.7 1.7 0 012.36 1.37l.21 1.88c.04.38.32.7.7.8 1.78.42 3.64.42 5.42 0 .37-.1.66-.42.7-.8l.2-1.88a1.7 1.7 0 012.37-1.37l1.73.75c.36.16.77.08 1.04-.21a12.06 12.06 0 002.7-4.67.92.92 0 00-.32-1.01l-1.53-1.13a1.7 1.7 0 010-2.74l1.52-1.13a.92.92 0 00.34-1.01 12.06 12.06 0 00-2.71-4.67.92.92 0 00-1.05-.21l-1.72.75c-.21.1-.44.15-.67.15a1.7 1.7 0 01-1.7-1.52l-.2-1.88a.92.92 0 00-.72-.8zM14 18a4 4 0 110-8 4 4 0 010 8z" fill={primaryFill} /></svg>;
};

export default Settings28Filled;