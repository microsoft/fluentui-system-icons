import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSunnyLow24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 2.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" fill={primaryFill} /><path d="M19.03 4.97c.3.3.3.77 0 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06c.3-.3.77-.3 1.06 0z" fill={primaryFill} /><path d="M17.4 13a5.5 5.5 0 10-10.82 0H2.76a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5h-3.84zM12 8a4 4 0 013.87 5H8.13A4 4 0 0112 8z" fill={primaryFill} /><path d="M6 16.75c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M10 19.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M4.97 4.97c.3-.3.77-.3 1.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L4.97 6.03a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
};

export default WeatherSunnyLow24Regular;