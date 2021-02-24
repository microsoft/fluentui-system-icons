import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Person48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a10 10 0 100 20 10 10 0 000-20z" fill={primaryFill} /><path d="M12.25 28A4.25 4.25 0 008 32.25V33c0 3.76 1.94 6.57 4.92 8.38C15.85 43.16 19.79 44 24 44s8.15-.84 11.08-2.62C38.06 39.57 40 36.76 40 33v-.75C40 29.9 38.1 28 35.75 28h-23.5z" fill={primaryFill} /></svg>;
};

export default Person48Filled;