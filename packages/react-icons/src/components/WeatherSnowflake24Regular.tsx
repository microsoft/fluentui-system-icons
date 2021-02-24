import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSnowflake24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2c.38 0 .7.28.74.65l.01.1V6.1l2.17-1.91a.75.75 0 011 1.13L12.5 8.09V11h2.9l2.79-3.15a.75.75 0 01.97-.14l.08.07c.29.25.34.66.14.97l-.07.09-1.9 2.17h3.34c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74H17.4l1.91 2.18c.25.28.25.7.01.98l-.08.08a.75.75 0 01-.98.01l-.08-.08-2.78-3.16h-2.9v2.9l3.16 2.79c.28.24.34.66.14.97l-.07.08a.75.75 0 01-.97.14l-.09-.07-2.17-1.9v3.34c0 .38-.29.7-.65.74l-.1.01a.75.75 0 01-.75-.65v-3.44l-2.17 1.9a.75.75 0 01-1-1.12L11 15.4V12.5H8.3l-3 3.41a.75.75 0 01-1.12-.99l2.13-2.42H2.75a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74h3.22L4.2 9.07a.75.75 0 111.13-1L7.87 11H11V8.1L7.84 5.3a.75.75 0 01-.14-.97l.07-.09a.75.75 0 01.97-.13l.09.07L11 6.09V2.75c0-.34.23-.64.55-.72l.1-.02.1-.01z" fill={primaryFill} /></svg>;
};

export default WeatherSnowflake24Regular;