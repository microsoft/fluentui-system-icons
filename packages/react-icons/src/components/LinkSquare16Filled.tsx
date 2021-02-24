import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkSquare16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.25C2 3.01 3 2 4.25 2h3.5C8.99 2 10 3 10 4.25v3.5c0 .98-.63 1.81-1.5 2.12V4.25a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75H5V10h-.75C3.01 10 2 9 2 7.75v-3.5z" fill={primaryFill} /><path d="M6 11.75C6 12.99 7 14 8.25 14h3.5c1.24 0 2.25-1 2.25-2.25v-3.5C14 7.01 13 6 11.75 6H11v1.5h.75c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 01-.75-.75V6.13C6.63 6.43 6 7.27 6 8.25v3.5z" fill={primaryFill} /></svg>;
};

export default LinkSquare16Filled;