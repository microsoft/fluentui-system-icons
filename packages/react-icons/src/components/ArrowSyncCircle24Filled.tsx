import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSyncCircle24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 100-20 10 10 0 000 20zM8.73 10.75H10a.75.75 0 010 1.5H7.25a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0V9a5 5 0 017.83-.23.75.75 0 01-1.16.96 3.5 3.5 0 00-5.94 1.02zm7.27 5V15a5 5 0 01-7.82.24.75.75 0 111.14-.97 3.51 3.51 0 005.84-.77H14a.75.75 0 010-1.5h2.75c.41 0 .75.34.75.75v3a.75.75 0 01-1.5 0z" fill={primaryFill} /></svg>;
};

export default ArrowSyncCircle24Filled;