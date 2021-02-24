import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Flashlight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 5c.41 0 .75.33.75.75v12.5c0 .41-.34.75-.75.75h-5.5A2.75 2.75 0 0113 16.25V16H3.75C2.78 16 2 15.2 2 14.25v-4.5C2 8.78 2.78 8 3.75 8H13v-.25A2.75 2.75 0 0115.75 5h5.5zm-13 6.25h-2.5a.75.75 0 000 1.5h2.5a.75.75 0 100-1.5z" fill={primaryFill} /></svg>;
};

export default Flashlight24Filled;