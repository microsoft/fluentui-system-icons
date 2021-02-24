import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PuzzleCube48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 6v10.5h10V6H19zm-2.5 13H6v10h10.5V19zM19 29V19h10v10H19zm-2.5 2.5H6v4.25C6 39.2 8.8 42 12.25 42h4.25V31.5zM19 42h10V31.5H19V42zm12.5 0V31.5H42v4.25C42 39.2 39.2 42 35.75 42H31.5zM42 19v10H31.5V19H42zm0-2.5v-4.25C42 8.8 39.2 6 35.75 6H31.5v10.5H42z" fill={primaryFill} /></svg>;
};

export default PuzzleCube48Filled;