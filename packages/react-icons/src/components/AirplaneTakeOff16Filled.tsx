import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AirplaneTakeOff16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 4.15c.09-.13.18-.27.3-.4v-.03c.26-.32.56-.66.92-.95.4-.32.87-.6 1.41-.71.19-.04.38-.06.57-.06 1.35 0 2.38.93 3 1.7l.22.29.03.03.16.29v.02c.27.67-.1 1.4-.71 1.7l-.15.07-2.23.82-3.1 4.48c-.94 1.35-3.06.42-2.7-1.18l.31-1.41-3.1.87A1.75 1.75 0 011 8V5.16c0-1.21 1.64-1.59 2.17-.5l.6 1.25 3.43-.9c.44-.12.82-.43 1.1-.86z" fill={primaryFill} /><path d="M4.34 4.57l.1.13 2.5-.66c.14-.03.34-.16.53-.44l.31-.45-1.27-.87a1.6 1.6 0 00-2.17 2.3z" fill={primaryFill} /><path d="M1.75 13.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H1.75z" fill={primaryFill} /></svg>;
};

export default AirplaneTakeOff16Filled;