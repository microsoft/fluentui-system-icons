import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cast28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 14a.75.75 0 000 1.5A3.75 3.75 0 0110 19.25a.75.75 0 001.5 0c0-2.9-2.35-5.25-5.25-5.25z" fill={primaryFill} /><path d="M5.5 11.25c0-.41.34-.75.75-.75a8.75 8.75 0 018.76 8.75.75.75 0 01-1.5 0c0-4-3.25-7.25-7.26-7.25a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M6.75 20a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M4.25 4.5C3.01 4.5 2 5.5 2 6.75v14.5c0 1.24 1 2.25 2.25 2.25h19.5c1.24 0 2.25-1 2.25-2.25V6.75c0-1.24-1-2.25-2.25-2.25H4.25zM3.5 6.75c0-.41.34-.75.75-.75h19.5c.41 0 .75.34.75.75v14.5c0 .41-.34.75-.75.75H4.25a.75.75 0 01-.75-.75V6.75z" fill={primaryFill} /></svg>;
};

export default Cast28Regular;