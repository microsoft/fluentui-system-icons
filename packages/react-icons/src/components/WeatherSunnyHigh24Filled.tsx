import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSunnyHigh24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c.41 0 .75.34.75.75v.5a.75.75 0 01-1.5 0v-.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M8 9a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /><path d="M12.75 14.75a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5z" fill={primaryFill} /><path d="M5.75 8a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" fill={primaryFill} /><path d="M17 8.75c0-.41.34-.75.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M6.72 5.78a.75.75 0 001.06-1.06l-.5-.5a.75.75 0 00-1.06 1.06l.5.5z" fill={primaryFill} /><path d="M7.78 12.22a.75.75 0 00-1.06 0l-.5.5a.75.75 0 101.06 1.06l.5-.5c.3-.3.3-.77 0-1.06z" fill={primaryFill} /><path d="M17.28 5.78a.75.75 0 11-1.06-1.06l.5-.5a.75.75 0 111.06 1.06l-.5.5z" fill={primaryFill} /><path d="M16.22 12.22c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 11-1.06 1.06l-.5-.5a.75.75 0 010-1.06z" fill={primaryFill} /><path d="M3.22 21.84c-.33.25-.8.2-1.06-.12-.4-.51.12-1.06.12-1.06h.02a3.49 3.49 0 01.18-.15l.54-.36A16.78 16.78 0 0112 17.5a16.78 16.78 0 019.7 3.15l.01.01a.75.75 0 01-.93 1.18l-.03-.03a5.63 5.63 0 00-.58-.4A15.28 15.28 0 0012 19a15.28 15.28 0 00-8.75 2.81l-.03.02z" fill={primaryFill} /></svg>;
};

export default WeatherSunnyHigh24Filled;