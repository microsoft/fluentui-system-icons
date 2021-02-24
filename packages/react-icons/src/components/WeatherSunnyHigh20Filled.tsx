import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSunnyHigh20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 3.5v-1a.5.5 0 011 0v1a.5.5 0 01-1 0z" fill={primaryFill} /><path d="M7 8a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /><path d="M9.5 12.5v1a.5.5 0 001 0v-1a.5.5 0 00-1 0z" fill={primaryFill} /><path d="M4.5 8a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M15.5 9h-1a.5.5 0 010-1h1a.5.5 0 010 1z" fill={primaryFill} /><path d="M6.15 5.85a.5.5 0 10.7-.7l-1-1a.5.5 0 10-.7.7l1 1z" fill={primaryFill} /><path d="M6.85 11.15a.5.5 0 00-.7 0l-1 1a.5.5 0 10.7.7l1-1a.5.5 0 000-.7z" fill={primaryFill} /><path d="M13.85 5.85a.5.5 0 01-.7-.7l1-1a.5.5 0 01.7.7l-1 1z" fill={primaryFill} /><path d="M13.15 11.15c.2-.2.5-.2.7 0l1 1a.5.5 0 01-.7.7l-1-1a.5.5 0 010-.7z" fill={primaryFill} /><path d="M6.13 16.46C7.18 16.19 8.46 16 10 16c1.67 0 3.05.23 4.13.53a11.17 11.17 0 013.02 1.33l.03.03a.5.5 0 00.63-.78l-.02-.02-.04-.03a4.8 4.8 0 00-.82-.5c-.57-.31-1.42-.7-2.53-1A16.57 16.57 0 0010 15c-1.62 0-3 .2-4.11.49a12.46 12.46 0 00-3.45 1.44 4.84 4.84 0 00-.23.16l-.01.01h-.01v.01a.5.5 0 00.62.78 1.6 1.6 0 01.19-.13 11.45 11.45 0 013.14-1.3z" fill={primaryFill} /></svg>;
};

export default WeatherSunnyHigh20Filled;