import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.61 8.22a2.4 2.4 0 110 4.78H14.3c.22.35.34.75.34 1.18 0 1.22-.91 2.19-2.12 2.19-1.2 0-1.9-.7-2.1-1.66a.5.5 0 01.98-.2c.1.53.44.86 1.12.86.64 0 1.12-.51 1.12-1.19 0-.65-.53-1.18-1.2-1.18H2.51a.5.5 0 01-.1-.98l.1-.01h13.11A1.4 1.4 0 0017 10.74v-.14a1.4 1.4 0 00-2.78-.08.5.5 0 01-1-.06 2.4 2.4 0 012.4-2.25zm-5.84 1.8H2.5a.5.5 0 01-.1-1H9.78a2.23 2.23 0 10-2.24-2.24.5.5 0 01-1 0 3.23 3.23 0 113.43 3.23H2.51h7.26z" fill={primaryFill} /></svg>;
}

const WeatherSquallsRegular = wrapIcon(rawSvg({}), 'WeatherSquallsRegular');
export default WeatherSquallsRegular;
      