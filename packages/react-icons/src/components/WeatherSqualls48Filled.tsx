import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSqualls48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.35 18.99A6.7 6.7 0 0144 25.74a6.7 6.7 0 01-6.82 6.74l-.18.01h-1.56c.36.76.56 1.61.56 2.51 0 3.35-2.6 6.01-6 6.01-3.15 0-4.92-1.34-5.85-3.56a1.75 1.75 0 013.23-1.35c.42.98.98 1.41 2.62 1.41 1.45 0 2.5-1.08 2.5-2.51 0-1.31-1.1-2.42-2.53-2.5l-.15-.01H5.75a1.75 1.75 0 01-.14-3.5H37.35a3.2 3.2 0 003.15-3.25 3.2 3.2 0 00-3.15-3.25c-1.4 0-2.55.85-2.86 2.16a1.75 1.75 0 11-3.4-.82 6.34 6.34 0 016.26-4.84zm-14.85-12a8.5 8.5 0 01.26 17H5.75a1.75 1.75 0 01-.14-3.5H22.5a5 5 0 000-10 4.82 4.82 0 00-5 4.56v.22a1.75 1.75 0 11-3.5 0 8.31 8.31 0 018.5-8.28z" fill={primaryFill} /></svg>;
};

export default WeatherSqualls48Filled;