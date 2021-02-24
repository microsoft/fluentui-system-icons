import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableDeleteColumn24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 3.75V8h-5V6.25C17 4.45 18.46 3 20.25 3h1c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M22 9.5v5h-5v-5h5z" fill={primaryFill} /><path d="M21.25 21c.41 0 .75-.34.75-.75V16h-5v1.75c0 1.8 1.46 3.25 3.25 3.25h1z" fill={primaryFill} /><path d="M2 20.25c0 .41.34.75.75.75h1C5.55 21 7 19.54 7 17.75V16H2v4.25z" fill={primaryFill} /><path d="M2 9.5v5h5v-5H2z" fill={primaryFill} /><path d="M2 3.75V8h5V6.25C7 4.45 5.54 3 3.75 3h-1a.75.75 0 00-.75.75z" fill={primaryFill} /><path d="M11.25 15.52v5.73a.75.75 0 001.5 0v-5.73a1.83 1.83 0 01-.08-.07l-.67-.67-.67.67-.08.07z" fill={primaryFill} /><path d="M11.25 8.73l.08.07.67.67.67-.67.08-.07V2.75a.75.75 0 00-1.5 0v5.98z" fill={primaryFill} /><path d="M9.47 14.53a.75.75 0 010-1.06L10.94 12l-1.47-1.47a.75.75 0 111.06-1.06L12 10.94l1.47-1.47a.75.75 0 111.06 1.06L13.06 12l1.47 1.47a.75.75 0 11-1.06 1.06L12 13.06l-1.47 1.47c-.3.3-.77.3-1.06 0z" fill={primaryFill} /></svg>;
};

export default TableDeleteColumn24Filled;