import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoonOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l6.6 6.61-.03.07c-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 00-.3.9 7.98 7.98 0 0012.14 1.19l2.14 2.13a.5.5 0 00.7-.7l-2.16-2.17-6.5-6.5-6.34-6.33z" fill={primaryFill} /><path d="M16.36 14l-.1.15L9.5 7.37c.27-1.32.21-2.8-.22-4.6a.6.6 0 01.61-.73A7.98 7.98 0 0116.36 14z" fill={primaryFill} /></svg>;
};

export default WeatherMoonOff20Filled;