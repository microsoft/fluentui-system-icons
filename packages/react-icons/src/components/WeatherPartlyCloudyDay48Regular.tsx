import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherPartlyCloudyDay48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 16c6.33 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H15.38a7.37 7.37 0 110-14.73h.16c.53-5.1 4.12-9.26 10.45-9.26zm0 2.5a8.04 8.04 0 00-7.98 8.2c0 .76-.66 1.35-1.4 1.35h-1.43a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.72h21.6a4.7 4.7 0 004.7-4.72 4.7 4.7 0 00-4.7-4.72h-1.41c-.75 0-1.41-.6-1.41-1.35a8 8 0 00-7.98-8.2zM8.7 24.3c.25.59 0 1.26-.55 1.56l-.12.06-2.31.96a1.24 1.24 0 01-1.07-2.24l.12-.06 2.3-.96c.64-.26 1.37.04 1.63.67zm13-9.65l-.06.02c-.92.3-1.78.7-2.57 1.19a5.5 5.5 0 00-6.83 7.95c-.75.27-1.47.64-2.12 1.09a7.86 7.86 0 013.8-11.26 7.88 7.88 0 017.78 1.01zm-16.12.18l.12.05 2.32.98c.63.27.93 1 .68 1.63-.24.6-.89.9-1.48.71l-.13-.04-2.32-.99c-.63-.27-.93-1-.67-1.63.24-.59.88-.89 1.48-.71zm7.36-6.17l.06.11.96 2.3a1.25 1.25 0 01-2.26 1.08l-.05-.12-.96-2.3a1.25 1.25 0 012.25-1.07zM22 8.1c.6.25.91.9.73 1.52l-.04.13-1 2.27a1.26 1.26 0 01-2.38-.83l.05-.13 1-2.28c.26-.64 1-.95 1.64-.68z" fill={primaryFill} /></svg>;
};

export default WeatherPartlyCloudyDay48Regular;