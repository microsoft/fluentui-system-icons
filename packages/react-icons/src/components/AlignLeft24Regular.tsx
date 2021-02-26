import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.75a.75.75 0 011.5 0v18.5a.75.75 0 01-1.5 0V2.75zM8.25 4C7.01 4 6 5 6 6.25v2.5C6 9.99 7 11 8.25 11h10.5C19.99 11 21 10 21 8.75v-2.5C21 5.01 20 4 18.75 4H8.25zM7.5 6.25c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75H8.25a.75.75 0 01-.75-.75v-2.5zM8.25 13C7.01 13 6 14 6 15.25v2.5C6 18.99 7 20 8.25 20h7c1.24 0 2.25-1 2.25-2.25v-2.5c0-1.24-1-2.25-2.25-2.25h-7zm-.75 2.25c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7a.75.75 0 01-.75-.75v-2.5z" fill={primaryFill} /></svg>;
};

export default AlignLeft24Regular;