import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignRight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 1.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zm-3.75.5c.97 0 1.75.78 1.75 1.75v1.5C12 6.22 11.22 7 10.25 7h-6.5C2.78 7 2 6.22 2 5.25v-1.5C2 2.78 2.78 2 3.75 2h6.5zM11 3.75a.75.75 0 00-.75-.75h-6.5a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75v-1.5zM10.25 9c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-4.5C4.78 14 4 13.22 4 12.25v-1.5C4 9.78 4.78 9 5.75 9h4.5zm.75 1.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75v-1.5z" fill={primaryFill} /></svg>;
};

export default AlignRight16Regular;