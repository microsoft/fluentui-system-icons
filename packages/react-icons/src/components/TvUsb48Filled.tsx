import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TvUsb48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 11.75A4.75 4.75 0 018.75 7h30.5A4.75 4.75 0 0144 11.75v7.9a3.5 3.5 0 00-1-.15h-7a3.5 3.5 0 00-3.5 3.5v2.84a2 2 0 00-2 2V35H8.75A4.75 4.75 0 014 30.25v-18.5zM11.25 41h21.8l-1.59-2.5H11.25a1.25 1.25 0 100 2.5zM35 23v5h-1a1 1 0 00-1 1v6.96a1 1 0 00.15.53L36 41v4a1 1 0 001 1h5a1 1 0 001-1v-4l2.85-4.5a1 1 0 00.15-.54V29a1 1 0 00-1-1h-1v-5a1 1 0 00-1-1h-7a1 1 0 00-1 1zm2.5 1.5h4V28h-4v-3.5z" fill={primaryFill} /></svg>;
};

export default TvUsb48Filled;