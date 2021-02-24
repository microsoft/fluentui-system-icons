import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretUp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.16 14.9c-.7.82-.13 2.08.94 2.08h11.8c1.07 0 1.65-1.26.94-2.07L13.32 8.6c-.7-.8-1.94-.8-2.64 0l-5.52 6.3zm1.5.58l5.15-5.9c.1-.1.28-.1.38 0l5.16 5.9H6.65z" fill={primaryFill} /></svg>;
};

export default CaretUp24Regular;