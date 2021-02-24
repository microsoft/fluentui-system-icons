import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Mention24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 0110 9.72v1.81a4 4 0 01-7.41 2.05 4.26 4.26 0 01-3.09 1.35c-2.52 0-4.5-2.25-4.5-4.96C7 9.25 8.98 7 11.5 7c.94 0 1.8.31 2.51.84a1 1 0 011.98.04L16 8v5.5a2 2 0 004 .15V12a8 8 0 10-5.33 7.54 1 1 0 11.67 1.89A10 10 0 1112 2zm-.35 7h-.15C10.15 9 9 10.3 9 11.97c0 1.66 1.15 2.96 2.5 2.96 1.3 0 2.41-1.2 2.5-2.78v-.22c-.02-1.59-1.08-2.83-2.35-2.92L11.5 9h.15z" fill={primaryFill} /></svg>;
};

export default Mention24Filled;