import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSqualls20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 8a2.5 2.5 0 01.16 5H14.6c.11.28.17.57.17.89a2.35 2.35 0 01-2.37 2.37c-1 0-1.74-.44-2.13-1.17a.75.75 0 011.27-.8l.1.17c.14.2.36.3.76.3.5 0 .87-.37.87-.87 0-.44-.36-.82-.84-.87l-.21-.01H2.74a.75.75 0 01-.1-1.5H15.44l.18-.02a1 1 0 10-1.01-1.45l-.1.21a.75.75 0 01-1.36-.6A2.5 2.5 0 0115.5 8zm-6 2H2.75a.75.75 0 01-.1-1.5H9.5a2 2 0 10-2-2 .75.75 0 01-1.5 0 3.5 3.5 0 113.93 3.47l-.1.02H2.75 9.5z" fill={primaryFill} /></svg>;
};

export default WeatherSqualls20Filled;