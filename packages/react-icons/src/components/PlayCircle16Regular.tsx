import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PlayCircle16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8a.5.5 0 01-.25.44L7.62 9.92a.75.75 0 01-1.12-.65V6.73c0-.58.62-.94 1.12-.65l2.63 1.48a.5.5 0 01.25.44zM8 2a6 6 0 100 12A6 6 0 008 2zM3 8a5 5 0 1110 0A5 5 0 013 8z" fill={primaryFill} /></svg>;
};

export default PlayCircle16Regular;