import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherDuststorm48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 35a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 3.5a1 1 0 100 2 1 1 0 000-2zm-10.75-8A1.75 1.75 0 015.6 27h31.75a3.2 3.2 0 003.15-3.25 3.2 3.2 0 00-3.15-3.25c-1.33 0-2.44.78-2.81 1.98l-.05.18a1.75 1.75 0 11-3.4-.82A6.34 6.34 0 0137.35 17 6.7 6.7 0 0144 23.75a6.7 6.7 0 01-6.82 6.74l-.18.01h-1.56c.36.76.56 1.61.56 2.51 0 3.35-2.6 6.01-6 6.01-3.15 0-4.92-1.35-5.85-3.56a1.75 1.75 0 113.23-1.35c.41.98.97 1.41 2.62 1.41 1.45 0 2.5-1.08 2.5-2.51 0-1.31-1.1-2.42-2.54-2.5l-.17-.01H5.75zM22.5 5a8.5 8.5 0 01.25 17h-17a1.75 1.75 0 01-.14-3.5H22.5a5 5 0 000-10 4.82 4.82 0 00-5 4.56v.22a1.75 1.75 0 11-3.5 0A8.31 8.31 0 0122.5 5zm16-1a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-31-1a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm31 4.5a1 1 0 100 2 1 1 0 000-2zm-31-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
};

export default WeatherDuststorm48Filled;