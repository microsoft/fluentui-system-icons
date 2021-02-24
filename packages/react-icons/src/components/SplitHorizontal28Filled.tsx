import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 13a.75.75 0 000 1.5h22.5a.75.75 0 000-1.5H2.75zm18.5-11A2.75 2.75 0 0124 4.75V12H4V4.75A2.75 2.75 0 016.75 2h14.5zM4 22.75V15.5h20v7.25a2.75 2.75 0 01-2.75 2.75H6.75A2.75 2.75 0 014 22.75z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal28Filled;