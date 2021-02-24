import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoon16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.85 3.02a5 5 0 11-4.59 7.7 5.86 5.86 0 004.16-3.54c.56-1.48.59-2.94.43-4.16zM13.45 8a6 6 0 00-6.2-6 .5.5 0 00-.48.6 7.89 7.89 0 01-.28 4.22c-.8 2.14-2.8 2.84-4.08 3.08a.5.5 0 00-.36.7A6 6 0 0013.45 8z" fill={primaryFill} /></svg>;
};

export default WeatherMoon16Regular;