import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier15X48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 15.25a1.25 1.25 0 00-2.32-.64l-.02.03a9.89 9.89 0 01-.34.51c-.23.35-.58.82-1 1.33a9.67 9.67 0 01-3.09 2.63 1.25 1.25 0 001.04 2.28A10.77 10.77 0 009 18.92v13.83a1.25 1.25 0 002.5 0v-17.5zm10-1.25c-.64 0-1.18.49-1.24 1.13l-.75 7.5a1.25 1.25 0 001.39 1.36l4.45-.53a4.16 4.16 0 11.5 8.29h-.5c-1.3 0-2.55-.55-3.43-1.52l-.74-.82a1.25 1.25 0 10-1.85 1.68l.74.82a7.14 7.14 0 005.29 2.34h.48a6.66 6.66 0 10-.79-13.27l-2.9.34.48-4.82h7.62a1.25 1.25 0 000-2.5H21.5zm14.63 10.37a1.25 1.25 0 10-1.76 1.76L37.23 29l-2.86 2.87a1.25 1.25 0 001.76 1.76L39 30.77l2.87 2.86a1.25 1.25 0 001.76-1.76L40.77 29l2.86-2.87a1.25 1.25 0 00-1.76-1.76L39 27.23l-2.87-2.86zM16.5 32.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /></svg>;
};

export default Multiplier15X48Regular;