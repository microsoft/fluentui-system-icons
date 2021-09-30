import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 38h17.5a1.25 1.25 0 01.13 2.49H15.25a1.25 1.25 0 01-.13-2.48l.13-.01zm-6-5h29.5a1.25 1.25 0 01.13 2.49H9.25a1.25 1.25 0 01-.13-2.48l.13-.01zM24 7c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H13.38a7.37 7.37 0 110-14.73h.16C14.07 11.16 17.66 7 24 7zm0 2.5a8.04 8.04 0 00-7.98 8.2c0 .76-.65 1.35-1.4 1.35H13.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.73h21.6a4.7 4.7 0 004.7-4.73 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.59-1.4-1.34A8 8 0 0024 9.5z" fill={primaryFill} /></svg>;
}

const WeatherFog48Regular = wrapIcon(rawSvg({}), 'WeatherFog48Regular');
export default WeatherFog48Regular;
      