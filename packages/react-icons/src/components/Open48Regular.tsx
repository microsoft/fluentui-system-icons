import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 7.25c0-.69.56-1.25 1.25-1.25h13.5c.69 0 1.25.56 1.25 1.25v13.5a1.25 1.25 0 11-2.5 0V10.27L23.13 26.63a1.25 1.25 0 01-1.76-1.76L37.73 8.5H27.25c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M7 16.25c0-4 3.25-7.25 7.25-7.25h7.5a1.25 1.25 0 110 2.5h-7.5a4.75 4.75 0 00-4.75 4.75V34a4.75 4.75 0 004.75 4.75h17.5A4.75 4.75 0 0036.5 34v-7.5a1.25 1.25 0 112.5 0V34c0 4-3.25 7.25-7.25 7.25h-17.5C10.25 41.25 7 38 7 34V16.25z" fill={primaryFill} /></svg>;
};

export default Open48Regular;