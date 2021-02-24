import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Backpack24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.42 8A2.42 2.42 0 008 10.42c0 .87.7 1.58 1.58 1.58h4.84c.87 0 1.58-.7 1.58-1.58A2.42 2.42 0 0013.58 8h-3.16zm-.92 2.42c0-.51.41-.92.92-.92h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 01-.08-.08z" fill={primaryFill} /><path d="M12 2a3.75 3.75 0 00-3.74 3.42A8 8 0 004 12.5v6.25C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25V12.5a8 8 0 00-4.26-7.08A3.75 3.75 0 0012 2zm6.5 12h-13v-1.5a6.5 6.5 0 0113 0V14zM8 17.25a.75.75 0 001.5 0v-1.54h9v3.04c0 .97-.78 1.75-1.75 1.75h-9.5c-.97 0-1.75-.78-1.75-1.75v-3.04H8v1.54zM12 4.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 014.04 0A8.01 8.01 0 0012 4.5z" fill={primaryFill} /></svg>;
};

export default Backpack24Regular;