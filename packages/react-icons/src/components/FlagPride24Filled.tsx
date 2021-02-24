import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagPride24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path fill="#745125" d="M4 4.25h16v1.5H4z" /><path fill="#E62C46" d="M4 5.75h16v1.5H4z" /><path fill="#F36D38" d="M4 7.25h16V9H4z" /><path fill="#FFD23E" d="M4 9h16v1.5H4z" /><path fill="#61BC51" d="M4 10.5h16v1.75H4z" /><path fill="#1793E8" d="M4 12.25h16v1.5H4z" /><path fill="#B73FBB" d="M4 13.75h17v1.5H4z" /><path d="M3.75 3a.75.75 0 00-.75.75v17.5a.75.75 0 001.5 0V16.5h15.75c.41 0 .75-.34.75-.75v-12a.75.75 0 00-.75-.75H3.75zm.75 1.5h15V15h-15V4.5z" fill={primaryFill} /></svg>;
};

export default FlagPride24Filled;