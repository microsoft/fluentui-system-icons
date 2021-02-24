import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSync20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.12 3.75a6.25 6.25 0 013.63 11.26.75.75 0 00.9 1.2 7.75 7.75 0 00-4-13.93l.59-.59A.75.75 0 1010.18.63L8.06 2.75c-.3.3-.3.77 0 1.06l2.12 2.12a.75.75 0 001.06-1.06L10.1 3.75z" fill={primaryFill} /><path d="M9.88 16.25A6.25 6.25 0 016.25 4.99a.75.75 0 00-.9-1.2 7.75 7.75 0 004 13.93l-.59.59a.75.75 0 001.06 1.06l2.12-2.12c.3-.3.3-.77 0-1.06l-2.12-2.12a.75.75 0 00-1.06 1.06l1.12 1.12z" fill={primaryFill} /></svg>;
};

export default ArrowSync20Filled;