import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherCloudy48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 14.02c6.34 0 9.94 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H15.39a7.37 7.37 0 01-.25-14.73h.4c.53-5.1 4.13-9.26 10.46-9.26zm0 2.5a8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.4 1.35H15.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.72h21.6a4.7 4.7 0 004.7-4.72 4.7 4.7 0 00-4.7-4.72H35.4c-.76 0-1.41-.6-1.41-1.35a8 8 0 00-7.98-8.2zM20 8a9.43 9.43 0 017.79 4.1 15.05 15.05 0 00-3.44-.01A6.65 6.65 0 0020 10.46a6.8 6.8 0 00-6.64 5.7l-.32 1.83a1 1 0 01-.98.83H10.1a3.85 3.85 0 00-2.54 6.62 9.27 9.27 0 00-1.05 2.1 6.55 6.55 0 014.04-11.75h.15A9.44 9.44 0 0120 8z" fill={primaryFill} /></svg>;
};

export default WeatherCloudy48Regular;