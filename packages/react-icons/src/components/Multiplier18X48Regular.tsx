import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier18X48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M30.5 18.88c0 1.5-.7 2.81-1.76 3.72a6.22 6.22 0 013.01 5.27c0 3.63-3.19 6.38-6.87 6.38-3.69 0-6.88-2.75-6.88-6.38a6.22 6.22 0 013.01-5.27 4.86 4.86 0 01-1.76-3.73c0-2.96 2.67-5.12 5.63-5.12 2.95 0 5.62 2.16 5.62 5.13zm-5.62-2.63c-1.88 0-3.13 1.31-3.13 2.63 0 1.3 1.25 2.62 3.13 2.62 1.87 0 3.12-1.31 3.12-2.63 0-1.3-1.25-2.62-3.12-2.62zM20.5 27.88c0 2.03 1.85 3.87 4.38 3.87 2.52 0 4.37-1.84 4.37-3.88 0-2.03-1.85-3.87-4.37-3.87-2.53 0-4.38 1.84-4.38 3.88zm15.63-3.51a1.25 1.25 0 00-1.76 1.76L37.23 29l-2.86 2.87a1.25 1.25 0 001.76 1.76L39 30.77l2.87 2.86a1.25 1.25 0 001.76-1.76L40.77 29l2.86-2.87a1.25 1.25 0 00-1.76-1.76L39 27.23l-2.87-2.86zM16.5 32.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-5-17.5a1.25 1.25 0 00-2.32-.64l-.02.03a9.15 9.15 0 01-.34.51c-.23.35-.58.82-1 1.33a9.67 9.67 0 01-3.09 2.63 1.25 1.25 0 001.04 2.28A10.77 10.77 0 009 18.92v13.83a1.25 1.25 0 002.5 0v-17.5z" fill={primaryFill} /></svg>;
};

export default Multiplier18X48Regular;