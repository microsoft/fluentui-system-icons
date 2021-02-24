import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Organization24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2A3.75 3.75 0 0011 9.43v2.07H7.75c-1.24 0-2.25 1-2.25 2.25v.83a3.75 3.75 0 101.5 0v-.83c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v.83a3.75 3.75 0 101.5 0v-.83c0-1.24-1-2.25-2.25-2.25H12.5V9.43A3.75 3.75 0 0011.75 2zM9.5 5.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM4 18.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM17.25 16a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" fill={primaryFill} /></svg>;
};

export default Organization24Regular;