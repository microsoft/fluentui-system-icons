import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignBottom24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 21a.75.75 0 010-1.5h18.5a.75.75 0 010 1.5H2.75zM4 15.75C4 16.99 5 18 6.25 18h2.5C9.99 18 11 17 11 15.75V5.25C11 4.01 10 3 8.75 3h-2.5C5.01 3 4 4 4 5.25v10.5zm2.25.75a.75.75 0 01-.75-.75V5.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v10.5c0 .41-.34.75-.75.75h-2.5zm6.75-.75c0 1.24 1 2.25 2.25 2.25h2.5c1.24 0 2.25-1 2.25-2.25v-7c0-1.24-1-2.25-2.25-2.25h-2.5c-1.24 0-2.25 1-2.25 2.25v7zm2.25.75a.75.75 0 01-.75-.75v-7c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v7c0 .41-.34.75-.75.75h-2.5z" fill={primaryFill} /></svg>;
};

export default AlignBottom24Regular;