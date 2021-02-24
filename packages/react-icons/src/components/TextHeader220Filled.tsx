import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextHeader220Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4.5a.75.75 0 00-1.5 0v11a.75.75 0 001.5 0v-5h5v5a.75.75 0 001.5 0v-11a.75.75 0 00-1.5 0V9h-5V4.5z" fill={primaryFill} /><path d="M14.75 5.25A2.3 2.3 0 0012.5 7.5a.75.75 0 01-1.5 0 3.8 3.8 0 013.75-3.75c1.4 0 2.48.8 2.97 1.91.5 1.11.41 2.5-.33 3.73a6.18 6.18 0 01-1.52 1.6l-.82.62-.07.04c-.3.22-.58.43-.85.65-.9.72-1.57 1.45-1.8 2.45h4.92a.75.75 0 010 1.5H11.5a.75.75 0 01-.75-.75c0-2.1 1.23-3.4 2.44-4.37l.9-.69.07-.04.78-.59c.53-.42.93-.8 1.17-1.2.5-.85.52-1.71.24-2.34a1.68 1.68 0 00-1.6-1.02z" fill={primaryFill} /></svg>;
};

export default TextHeader220Filled;