import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherHaze24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.84 13.98a5.65 5.65 0 011.72.03c1.29.2 2.52.83 3.82 1.6 2.36 1.37 4.94 1.1 6.43.03a.75.75 0 11.88 1.22c-2.01 1.44-5.24 1.69-8.07.04a10.05 10.05 0 00-3.3-1.41 4.8 4.8 0 00-3.21.67.75.75 0 11-.72-1.32 7.2 7.2 0 012.45-.86z" fill={primaryFill} /><path d="M9.64 11.28a5.66 5.66 0 00-3.08-.25c-.7.13-1.41.4-2.17.81a.75.75 0 00.72 1.32 4.8 4.8 0 014.05-.46A13.6 13.6 0 0111.8 14c2.78 1.53 5.92 1.26 7.89-.14a.75.75 0 00-.88-1.22c-.4.3-.9.52-1.44.68-1.08.3-2.38.31-3.68-.12a7 7 0 01-1.31-.6 14.99 14.99 0 00-2.74-1.32z" fill={primaryFill} /><path d="M17.52 12v.2c-1.2.5-2.96.52-4.64-.46a12.39 12.39 0 00-4.17-1.72 6.67 6.67 0 00-1.85-.05A5.53 5.53 0 0117.52 12z" fill={primaryFill} /><path d="M12.12 22a.76.76 0 01-.25 0h.25z" fill={primaryFill} /><path d="M5.97 4.94l-.08-.07A.75.75 0 004.91 6l1.06 1.06.09.07A.75.75 0 007.03 6L5.97 4.94z" fill={primaryFill} /><path d="M19.15 5.92a.75.75 0 00-1.13-.98L16.96 6l-.08.09a.75.75 0 001.14.97L19.08 6l.07-.08z" fill={primaryFill} /><path d="M12.74 2.64a.75.75 0 00-1.49.1v1.6a.75.75 0 001.5-.1v-1.6z" fill={primaryFill} /><path d="M5.1 19.16a4.8 4.8 0 013.21-.67c1 .16 2.02.66 3.31 1.4 2.83 1.66 6.06 1.4 8.07-.03a.75.75 0 10-.88-1.22c-1.49 1.06-4.07 1.34-6.43-.04A11.44 11.44 0 008.56 17a6.29 6.29 0 00-4.17.84.75.75 0 00.72 1.32z" fill={primaryFill} /></svg>;
};

export default WeatherHaze24Filled;