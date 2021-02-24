import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bookmark28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 3.5A3.25 3.25 0 006 6.75v18a.75.75 0 001.2.6l6.8-5.16 6.8 5.16a.75.75 0 001.2-.6v-18c0-1.8-1.46-3.25-3.25-3.25h-9.5z" fill={primaryFill} /></svg>;
};

export default Bookmark28Filled;