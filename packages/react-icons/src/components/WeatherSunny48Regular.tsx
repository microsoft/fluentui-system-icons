import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSunny48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 38.47c.64 0 1.17.49 1.24 1.12V42.75a1.25 1.25 0 01-2.5.13V39.72c0-.7.56-1.25 1.25-1.25zm11.9-4.37l.1.09 2.14 2.15a1.25 1.25 0 01-1.66 1.86l-.1-.1-2.15-2.14a1.25 1.25 0 011.66-1.86zm-22.14.09c.45.45.48 1.17.09 1.67l-.1.1-2.14 2.14a1.25 1.25 0 01-1.86-1.66l.09-.1 2.15-2.15a1.25 1.25 0 011.77 0zM24 13.09a10.92 10.92 0 110 21.83 10.92 10.92 0 010-21.84zm0 2.5a8.42 8.42 0 100 16.83 8.42 8.42 0 000-16.84zm18.73 7.2a1.25 1.25 0 01.13 2.5h-3.17a1.25 1.25 0 01-.12-2.5h3.16zm-34.42-.06a1.25 1.25 0 01.12 2.5H5.27a1.25 1.25 0 01-.13-2.5h3.17zM11.5 9.8l.1.1 2.15 2.14a1.25 1.25 0 01-1.67 1.86l-.1-.09-2.15-2.15A1.25 1.25 0 0111.5 9.8zm26.63.1c.46.45.49 1.17.1 1.66l-.1.1L36 13.81a1.25 1.25 0 01-1.86-1.67l.09-.1 2.15-2.14a1.25 1.25 0 011.76 0zM24 4c.65 0 1.18.49 1.24 1.12l.01.13v3.03a1.25 1.25 0 01-2.5.13V5.25c0-.7.56-1.25 1.25-1.25z" fill={primaryFill} /></svg>;
};

export default WeatherSunny48Regular;