import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Question24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4a5 5 0 00-5 5 1 1 0 002 0 3 3 0 116 0c0 .82-.2 1.3-.44 1.63-.26.36-.62.64-1.13.98l-.11.08c-.45.3-1.02.7-1.47 1.25A3.89 3.89 0 0011 15.5v.5a1 1 0 102 0v-.5c0-.66.18-1.02.4-1.3.26-.31.6-.55 1.11-.9l.06-.04a6.2 6.2 0 001.62-1.47c.5-.7.81-1.6.81-2.79a5 5 0 00-5-5z" fill={primaryFill} /><path d="M12 21.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
};

export default Question24Filled;