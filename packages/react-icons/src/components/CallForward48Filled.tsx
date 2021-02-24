import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallForward48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.28 4.7c2.12-.3 4.43.3 6.35 1.74a4.23 4.23 0 011.64 4.06l-.7 4.32a4.63 4.63 0 01-3.73 3.8l-2.03.38c-1.06.2-1.9.85-2.1 1.76-.47 2-.46 4.5 0 6.48.21.9 1.04 1.56 2.1 1.76l2.03.37a4.63 4.63 0 013.73 3.8l.65 4.05a4.51 4.51 0 01-1.9 4.44 9 9 0 01-6.16 1.62 6.5 6.5 0 01-5.04-3.5c-1.82-3.46-3.5-8.49-3.5-15.28 0-6.85 1.7-12.22 3.53-16.02a6.64 6.64 0 015.13-3.78z" fill={primaryFill} /><path d="M33.13 13.87a1.25 1.25 0 00-1.76 1.76L37.73 22H23.75a1.25 1.25 0 000 2.5h13.98l-6.36 6.37a1.25 1.25 0 001.76 1.76l8.5-8.5c.5-.48.5-1.28 0-1.76l-8.5-8.5z" fill={primaryFill} /></svg>;
};

export default CallForward48Filled;