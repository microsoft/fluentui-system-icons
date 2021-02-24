import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const History24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a9 9 0 11-8.96 8.18 1 1 0 111.99.18 7.1 7.1 0 001.03 4.35A7.04 7.04 0 0012 19 7 7 0 107.1 7h1.4a1 1 0 01.11 2H4.5a1 1 0 01-1-.88V4a1 1 0 011.99-.11V5.78A8.98 8.98 0 0112 3zm-.75 4c.38 0 .7.28.74.65l.01.1V12h2.25a.75.75 0 01.1 1.5h-3.1a.75.75 0 01-.74-.65l-.01-.1v-5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default History24Filled;