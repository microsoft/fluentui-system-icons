import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherBlowingSnow24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 10a3 3 0 110 6H17.7c.2.38.3.8.3 1.25a2.68 2.68 0 01-2.68 2.76c-1.5 0-2.41-.89-2.66-2.1a.75.75 0 111.47-.3c.12.56.46.9 1.2.9.67 0 1.17-.54 1.17-1.26 0-.69-.57-1.25-1.27-1.25H2.73a.75.75 0 01-.1-1.49h12.5l.1-.01h3.91a1.5 1.5 0 10-1.63-1.73l-.02.24a.75.75 0 01-1.49-.2A3 3 0 0119 10zm-9.25 7.5a.75.75 0 110 1.5.75.75 0 010-1.5zM12 4a4 4 0 01.02 8H2.76a.75.75 0 01-.1-1.5h9.5A2.5 2.5 0 109.5 8 .75.75 0 118 8a4 4 0 014-4zm7.25 2.5a.75.75 0 110 1.5.75.75 0 010-1.5zM5.75 5a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default WeatherBlowingSnow24Regular;