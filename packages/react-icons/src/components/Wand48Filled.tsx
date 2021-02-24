import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wand48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39 7.25a1.25 1.25 0 10-2.5 0V9h-1.75a1.25 1.25 0 000 2.5h1.75v1.75a1.25 1.25 0 002.5 0V11.5h1.75a1.25 1.25 0 100-2.5H39V7.25z" fill={primaryFill} /><path d="M15 11.25a1.25 1.25 0 10-2.5 0V13h-1.75a1.25 1.25 0 000 2.5h1.75v1.75a1.25 1.25 0 002.5 0V15.5h1.75a1.25 1.25 0 100-2.5H15v-1.75z" fill={primaryFill} /><path d="M33.75 30c.69 0 1.25.56 1.25 1.25V33h1.75a1.25 1.25 0 110 2.5H35v1.75a1.25 1.25 0 11-2.5 0V35.5h-1.75a1.25 1.25 0 010-2.5h1.75v-1.75c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /><path d="M32.6 15.4a4.75 4.75 0 00-6.71 0l-1.36 1.36 6.72 6.72 1.36-1.36a4.75 4.75 0 000-6.72z" fill={primaryFill} /><path d="M29.48 25.25l-6.72-6.72L5.4 35.9a4.75 4.75 0 006.71 6.72l17.37-17.37z" fill={primaryFill} /></svg>;
};

export default Wand48Filled;