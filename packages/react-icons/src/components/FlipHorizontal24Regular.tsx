import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlipHorizontal24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 17.5a.75.75 0 01-.66-1.1L10.1 4.9a.75.75 0 011.41.35v11.5c0 .41-.34.75-.75.75H4.5z" fill={primaryFill} /><path d="M20.14 17.13a.75.75 0 01-.64.37h-6.25a.75.75 0 01-.75-.75V5.25a.75.75 0 011.4-.36l6.26 11.5c.13.23.12.52-.02.74zM14 8.2V16h4.24L14 8.2z" fill={primaryFill} /></svg>;
};

export default FlipHorizontal24Regular;