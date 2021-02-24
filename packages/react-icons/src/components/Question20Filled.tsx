import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Question20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a4 4 0 00-4 4 .75.75 0 001.5 0A2.5 2.5 0 0110 4.5 2.5 2.5 0 0112.5 7c0 .6-.16.97-.37 1.27a5 5 0 01-.97.92c-.4.33-.9.73-1.28 1.3-.39.58-.63 1.3-.63 2.26v.5a.75.75 0 001.5 0v-.5c0-.67.16-1.1.38-1.43.23-.35.55-.62.97-.96l.06-.05c.38-.3.84-.67 1.2-1.17C13.74 8.6 14 7.9 14 7a4 4 0 00-4-4z" fill={primaryFill} /><path d="M10 17a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Question20Filled;