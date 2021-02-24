import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookOpen24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h6c.77 0 1.47-.29 2-.76.53.47 1.23.76 2 .76h6a2 2 0 002-2V6a2 2 0 00-2-2h-6c-.77 0-1.47.29-2 .76A2.99 2.99 0 0010 4H4zm7 3v10a1 1 0 01-1 1H4V6h6a1 1 0 011 1zm2 10V7a1 1 0 011-1h6v12h-6a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default BookOpen24Filled;