import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Person32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 9A7 7 0 119 9a7 7 0 0114 0zm-2 0a5 5 0 10-10 0 5 5 0 0010 0zM7.5 18A3.5 3.5 0 004 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0016 30c3.2 0 6.14-.82 8.32-2.2C26.48 26.41 28 24.4 28 22v-.5a3.5 3.5 0 00-3.5-3.5h-17zM6 21.5c0-.83.67-1.5 1.5-1.5h17c.83 0 1.5.67 1.5 1.5v.5c0 1.47-.94 2.95-2.76 4.1A13.69 13.69 0 0116 28c-2.88 0-5.43-.74-7.24-1.9C6.94 24.96 6 23.48 6 22v-.5z" fill={primaryFill} /></svg>;
};

export default Person32Regular;