import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Channel48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12.5a2.5 2.5 0 103 4 2.5 2.5 0 00-3-4z" fill={primaryFill} /><path d="M6.19 10.72A4 4 0 116 18.21v17.54C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-23.5C42 8.8 39.2 6 35.75 6h-23.5c-2.92 0-5.38 2-6.06 4.72zM16 20.25c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 110 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25zM17.25 26h9.5a1.25 1.25 0 110 2.5h-9.5a1.25 1.25 0 110-2.5z" fill={primaryFill} /></svg>;
};

export default Channel48Filled;