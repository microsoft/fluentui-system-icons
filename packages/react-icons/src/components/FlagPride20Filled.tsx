import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagPride20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path fill="#745125" d="M4 4h12v1H4z" /><path fill="#E62C46" d="M4 5h12v1H4z" /><path fill="#F36D38" d="M4 6h12v1H4z" /><path fill="#FFD23E" d="M4 7h12v1H4z" /><path fill="#61BC51" d="M4 8h12v1H4z" /><path fill="#1793E8" d="M4 9h12v1H4z" /><path fill="#B73FBB" d="M4 10h12v1H4z" /><path d="M3.5 3h13c.28 0 .5.22.5.5v8a.5.5 0 01-.5.5H4v5.5a.5.5 0 01-1 0v-14c0-.28.22-.5.5-.5zM4 4v7h12V4H4z" fill={primaryFill} /></svg>;
};

export default FlagPride20Filled;