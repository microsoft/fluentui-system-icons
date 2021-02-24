import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallOutbound48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 3.75c-4.92 0-9.62 3.38-9.46 8.74a35.8 35.8 0 004.88 16.89A39.98 39.98 0 0021.47 42.4c4.49 3.08 10 .94 12.64-3.37a5.17 5.17 0 00-.43-6l-2.41-2.9a5.25 5.25 0 00-5.86-1.59l-2.95 1.08c-.85.31-1.62.15-2.07-.31a28.57 28.57 0 01-5.16-7.68c-.23-.56-.02-1.32.79-1.9l2.76-1.98a5.25 5.25 0 001.9-6l-1.56-4.5a5.25 5.25 0 00-4.96-3.51h-.15z" fill={primaryFill} /><path d="M26.37 21.63a1.25 1.25 0 010-1.76L39.73 6.5H29.25a1.25 1.25 0 110-2.5h13.5c.69 0 1.25.56 1.25 1.25v13.5a1.25 1.25 0 01-2.5 0V8.27L28.13 21.63c-.48.5-1.28.5-1.76 0z" fill={primaryFill} /></svg>;
};

export default CallOutbound48Filled;