import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Rename28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2a.75.75 0 000 1.5h1.5v21h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-21h1.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /><path d="M6.25 6.02h6v1.5h-6c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75h6v1.5h-6A3.25 3.25 0 013 18.77v-9.5c0-1.8 1.46-3.25 3.25-3.25z" fill={primaryFill} /><path d="M21.75 20.52h-6v1.5h6c1.8 0 3.25-1.46 3.25-3.25v-9.5c0-1.8-1.46-3.25-3.25-3.25h-6v1.5h6c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75z" fill={primaryFill} /></svg>;
};

export default Rename28Regular;