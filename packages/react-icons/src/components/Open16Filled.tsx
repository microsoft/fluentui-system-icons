import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v4.5a.75.75 0 01-1.5 0V4.56L8.28 8.78a.75.75 0 01-1.06-1.06l4.22-4.22H8.75A.75.75 0 018 2.75z" fill={primaryFill} /><path d="M2 6.25C2 4.45 3.46 3 5.25 3h1a.75.75 0 010 1.5h-1c-.97 0-1.75.78-1.75 1.75v4.5c0 .97.78 1.75 1.75 1.75h4.5c.97 0 1.75-.78 1.75-1.75v-1a.75.75 0 011.5 0v1c0 1.8-1.46 3.25-3.25 3.25h-4.5A3.25 3.25 0 012 10.75v-4.5z" fill={primaryFill} /></svg>;
};

export default Open16Filled;