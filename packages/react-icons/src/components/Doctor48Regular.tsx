import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Doctor48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 8.5v8.75c0 .69-.56 1.25-1.25 1.25H8.5v11h8.75c.69 0 1.25.56 1.25 1.25v8.75h11v-8.75c0-.69.56-1.25 1.25-1.25h8.75v-11h-8.75c-.69 0-1.25-.56-1.25-1.25V8.5h-11zM16 8.25C16 7.01 17 6 18.25 6h11.5C30.99 6 32 7 32 8.25V16h7.75c1.24 0 2.25 1 2.25 2.25v11.5c0 1.24-1 2.25-2.25 2.25H32v7.75c0 1.24-1 2.25-2.25 2.25h-11.5C17.01 42 16 41 16 39.75V32H8.25C7.01 32 6 31 6 29.75v-11.5C6 17.01 7 16 8.25 16H16V8.25z" fill={primaryFill} /></svg>;
};

export default Doctor48Regular;