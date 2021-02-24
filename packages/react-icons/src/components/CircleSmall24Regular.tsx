import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CircleSmall24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM8 12a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /></svg>;
};

export default CircleSmall24Regular;