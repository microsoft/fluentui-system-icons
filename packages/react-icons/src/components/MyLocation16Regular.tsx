import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MyLocation16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm.5-9a.5.5 0 00-1 0v1.52A5 5 0 003.02 7.5H1.5a.5.5 0 000 1h1.52a5 5 0 004.48 4.48v1.52a.5.5 0 001 0v-1.52a5 5 0 004.48-4.48h1.52a.5.5 0 100-1h-1.52A5 5 0 008.5 3.02V1.5zM8 12a4 4 0 110-8 4 4 0 010 8z" fill={primaryFill} /></svg>;
};

export default MyLocation16Regular;