import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tent28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.6 3.21a.75.75 0 00-1.15 0c-1.8 2.16-5.34 4.71-7.37 5.85a.75.75 0 00-.38.55L4.06 21.5H2.75a.75.75 0 000 1.5h22.5a.75.75 0 000-1.5h-1.26L22.35 9.61a.75.75 0 00-.38-.55c-2.03-1.14-5.57-3.7-7.37-5.85zm4.94 18.27c-2.04-2.87-3.48-5.67-4.82-10.8a.75.75 0 00-1.45.01c-1.47 5.75-3.22 8.62-4.83 10.8H5.58l1.55-11.3a34.73 34.73 0 006.9-5.37 34.73 34.73 0 006.89 5.36l1.55 11.3h-2.93zm-1.82 0h-7.44A28.32 28.32 0 0014 13.61a29.28 29.28 0 003.72 7.87z" fill={primaryFill} /></svg>;
};

export default Tent28Regular;