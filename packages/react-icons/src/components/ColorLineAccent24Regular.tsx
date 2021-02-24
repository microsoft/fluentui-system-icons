import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorLineAccent24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 15.63a2 2 0 002.57 1.79l4.3-1.3c.42-.12.82-.33 1.16-.62h7.47a1 1 0 011 1v3a1 1 0 01-1 1h-15a1 1 0 01-1-1v-3c0-.37.2-.7.5-.87z" fill={primaryFill} /></svg>;
};

export default ColorLineAccent24Regular;