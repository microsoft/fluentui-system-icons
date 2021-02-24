import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SportHockey24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.35 12.57c-.68 1.9-.77 3.88.44 5.1l.23.24a627.9 627.9 0 003.03 3.04c1.28 1.28 3.3 1.3 5.29.66a16.3 16.3 0 006.22-4.04 16.3 16.3 0 004.04-6.22c.64-1.99.62-4.01-.66-5.3a741.2 741.2 0 01-2.9-2.9l-.35-.37c-1.23-1.21-3.2-1.12-5.1-.44-1.97.71-4.15 2.14-6.12 4.11a17.45 17.45 0 00-4.12 6.12zm15.14-5.7v.02l-.01.04a4.7 4.7 0 01-.14.57 14.34 14.34 0 01-3.6 6.03 15.61 15.61 0 01-6.78 3.94h-.03l-.02.01s-.75.09-.9-.57c-.08-.4.18-.8.58-.9h.03a4.38 4.38 0 00.5-.14 14.11 14.11 0 005.57-3.4 12.84 12.84 0 003.2-5.36 6.76 6.76 0 00.12-.46c.07-.4.44-.7.86-.64.41.07.69.45.62.86z" fill={primaryFill} /></svg>;
};

export default SportHockey24Filled;